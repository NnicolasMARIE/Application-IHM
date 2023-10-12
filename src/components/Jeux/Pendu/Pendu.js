import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
//import dictionary from "./dictionary.js";
import React, { useEffect, useState } from "react";
import { Modal, Progress, Select } from "antd";
import { useHistory } from "react-router";
import { OverlayTrigger, Popover } from "react-bootstrap";

// Image Imports
import {
  zerothHanger,
  firstHanger,
  secondHanger,
  thirdHanger,
  fourthHanger,
  fifthHanger,
  sixthHanger,
  seventhHanger,
} from "./img/index";

const imageMap = [
  zerothHanger,
  firstHanger,
  secondHanger,
  thirdHanger,
  fourthHanger,
  fifthHanger,
  sixthHanger,
  seventhHanger,
];

// Ant Design Imports
//const { Title } = Typography;
const { Option } = Select;

// Universal Constants
const num_lives = 7;
const alphabets = "azertyuiopqsdfghjklmwxcvbn".toUpperCase().split("");
const keys_per_row = [10, 10, 6];
const keys_before = [0, 10, 20];








// Main APP Component
function Pendu({pays}) {

  let history = useHistory()

  let dictionnaire = DICOFR
  let motFR
  

  let dictionary
  if(pays === "Anglais"){
    dictionary = DICOEN
  }
  else if (pays === "Français") {
    dictionary = DICOFR
  }
  else if (pays === "Allemand") {
    dictionary = DICOAL
  }
  else if (pays === "Espagnol") {
    dictionary = DICOES
  }

  // Our Hangman Game
  /* ========================================== SET UP STATE AND CONST ========================================== */
  
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [word, setWord] = useState("FRAMERATE");
  const [category, setCategory] = useState("animaux");
  const [guesses, setGuesses] = useState(new Set());

  //console.log("mottttssss", word.toLowerCase())
  //console.log("category", category.length)
  //console.log("dico", dictionary[category])

  for (let i = 0 ; i<11; i++){
    if(dictionary[category][i] === word.toLowerCase()){
      console.log("iiiii", i)
      //console.log("motFR", dictionnaire[category][i])
      motFR = dictionnaire[category][i].toUpperCase()
    }
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className="text-center">Indice</Popover.Header>
      <Popover.Body>
        <p className="text-center">Le mot traduit en français est le suivant : <strong>{motFR}</strong></p>
      </Popover.Body>
    </Popover>
  );

  console.log("FRANCAIS",dictionnaire)
  console.log("motFR", motFR)

  
  // Set up catetgories
  const categories = [];
  for (let key in dictionary) {
    categories.push(key);
  }
  categories.sort();
  var categoriesJSX = [];
  for (let i = 0; i < categories.length; i++) {
    categoriesJSX.push(
      <Option key={categories[i]} value={categories[i]}>
        {categories[i]} ({dictionary[categories[i]].length} mots)
      </Option>
    );
  }
  categoriesJSX = [
    <Select
      style={{ width: 200 }}
      onChange={handleCategoryChange}
      size="large"
      defaultValue="animaux"
    >
      {categoriesJSX}
    </Select>,
  ];

  /* ========================================== FUNCTIONS ========================================== */
  function handleCategoryChange(value) {
    reset(value);
  }

  // Reset Function
  function reset(category) {
    setWrongGuesses(0);
    setGuesses(new Set());
    setWord(
      dictionary[category][
        Math.floor(Math.random() * dictionary[category].length)
      ].toUpperCase()
    );
    setCategory(category);
  }

  // Generating Keyboard
  function generateKeyboard() {
    // console.log("Generating Keyboard");
    var keysJSX = [[], [], []];
    var keyboardJSX = [];
    for (let j = 0; j < 3; j++) {
      for (let i = keys_before[j]; i < keys_before[j] + keys_per_row[j]; i++) {
        keysJSX[j].push(
          <div
            onClick={() => handleLetterGuess(alphabets[i])}
            className="inputLetterContainer"
            key={alphabets[i]}
          >
            <InputLetter
              letter={alphabets[i]}
              guesses={guesses}
              key={alphabets[i]}
            />
          </div>
        );
      }
    }

    keyboardJSX.push(
      <div className="col d-inline-flex" key="firstrow">
        {keysJSX[0].map((key, index) => (
          <div key={index}>{key}</div>
        ))}
      </div>
    );
    keyboardJSX.push(
      <div className="col d-inline-flex" key="secondrow">
        {keysJSX[1].map((key, index) => (
          <div key={index}>{key}</div>
        ))}
      </div>
    );
    keyboardJSX.push(
      <div className="col d-inline-flex" key="thirdrow">
        {keysJSX[2].map((key, index) => (
          <div key={index}>{key}</div>
        ))}
      </div>
    );

    keyboardJSX = [<div>{keyboardJSX}</div>];
    return keyboardJSX;
  }

  // Handle a letter guess
  function handleLetterGuess(letter) {
    // console.log(word);
    // console.log("Guessed: " + letter);
    if (guesses.has(letter)) {
      return;
    }
    let new_guesses = new Set(guesses);
    new_guesses.add(letter);
    setGuesses(new_guesses);

    if (!word.includes(letter)) {
      if (wrongGuesses + 1 === 7) {
        // plus 1 to account for slow setting state
        FailureModal();
      }
      setWrongGuesses(wrongGuesses + 1);
    }

    let won = true;
    for (let i = 0; i < word.length; i++) {
      if (
        !(guesses.has(word.charAt(i)) || word[i] === " " || letter === word[i])
      ) {
        won = false;
        break;
      }
    }
    if (won) {
      SuccessModal();
    }
  }

  /*========================================== END GAME MODALS ==========================================*/
  // Success Modal
  function SuccessModal() {
    Modal.success({
      title: "Félicitation ! Vous avez gagné!",
      content: "Vous avez deviné le mot avec moins de 7 erreurs ! " + word + " qui signifie " + motFR + " en Français.",
      okText: "Rejouer",
      onOk: () => {
        reset(category);
      },
    });
  }
  // Failure Modal
  function FailureModal() {
    Modal.error({
      title: "Vous avez perdu !",
      content: "Essayez encore ! La bonne réponse était : '" + word + "' qui signifie " + motFR + " en Français.",
      okText: "Rejouer",
      onOk: () => {
        reset(category);
      },
    });
  }

  /* ========================================== Run Set-Up Code Once on Load ==========================================*/
  useEffect(() => {
    reset(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ========================================== RENDER ========================================== */
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col my-3 colortitle4 rounded">
          <h1 className="text-white align-middle"> Jeu du Pendu</h1>
        </div>
      </div>
      <div className="row align-items-center h-100">
        <div className="col text-center py-3">
          <h2>Catégorie : {categoriesJSX}</h2>
        </div>
        <div className="col text-center py-3">
          <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose>
            <button className="btn btn-primary">Traduction</button>
          </OverlayTrigger>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-12 align-self-center text-center py-3">
          <img src={imageMap[wrongGuesses]} alt="Hanger" className="img-fluid hangermanImg rounded"/>
        </div>

        <div className="col-lg-9 col-md-12">
          <div className="row text-center pt-3">
            <h4>Choix de la lettre</h4>
          </div>
          <div className="row text-center p-3">
            {generateKeyboard()}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <ProgressBar wrongGuesses={wrongGuesses} />
        </div>
      </div>

      <div className="row">
        <div className="col text-center py-3">
          <DisplayWord word={word} guesses={guesses} />
        </div>
      </div>
      

      <div className="row py-3">
        {/* <button className="btn btn-primary" onClick={history.goBack}>Retour à la page précedente</button> */}
        <button
          className="btn btn-primary"
          onClick={() => {
            if (window.confirm("Voulez-vous vraiment retourner à la page précédente ?")) {
              history.goBack()
            }
          }}
        >Retour à la page précedente</button>
      </div>
    </div>
  );
}

/* ========================================== COMPONENTS ========================================== */
// Progress Bar
function ProgressBar(props) {
  return (
    <div className="col">
      <h4>Vies restantes: {num_lives - props.wrongGuesses - 1}</h4>
        <Progress
          strokeColor={{
            "0%": "#61729f",
            "100%": "#61729f",
          }}
          trailColor="#d9d9d9"
          percent={Math.round(
            100 - (props.wrongGuesses / (num_lives - 1)) * 100
          )}
          showInfo={false}
        />
    </div>
   
  );
}

// Input Letter Component
function InputLetter(props) {
  if (!props.guesses.has(props.letter)) {
    return (
      <div key={props.guesses} className="inputLetter">
        {props.letter}
      </div>
    );
  } else {
    return (
      <div key={props.guesses} className="disabledLetter">
        {props.letter}
      </div>
    );
  }
}

// Display Word Component
function DisplayWord(props) {
  let word = props.word;
  let guesses = props.guesses;

  // Display Letter Component
  function DisplayLetter(props) {
    return <div className="displayLetter">{props.letter}</div>;
  }

  let lettersJSX = [];
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (!guesses.has(letter) && letter !== " ") {
      letter = " _ ";
    }
    lettersJSX.push(<DisplayLetter key={i} letter={letter} />);
  }
  return (
    <div className="d-flex justify-content-center">
      {lettersJSX}
    </div>
  );
}

export default Pendu;


//dico
const DICOFR = {
  animaux : [
    "alligator",
    "anaconda",
    "fourmi",
    "antilope",
    "chauvesouris",
    "ours",
    "castor",
    "abeille",
    "oiseau",
    "bison",
  ],
  sciences: [
    "astronomie",
    "biochimie",
    "biologie",
    "botanique",
    "cellule",
    "chimie",
    "climatologue",
    "données",
    "électricité",
    "énergie",
  ],
  nourritures: [
    "pomme",
    "avocat",
    "baguette",
    "bananes",
    "boeuf",
    "pain",
    "brocoli",
    "burrito",
    "beurre",
    "gâteau",
  ],
  métiers: [
    "comptable",
    "acteur",
    "conseiller",
    "ambassadeur",
    "animateur",
    "archer",
    "artiste",
    "astronaute",
    "athlète",
    "avocat",
  ],
  sports: [
    "football américain",
    "tir",
    "athlétisme",
    "badminton",
    "baseball",
    "basketball",
    "biathlon",
    "bobsleigh",
    "bowling",
    "boxe",
  ],
}


const DICOAL = {
  animaux: [
    "alligator",
    "anaconda",
    "Ameise",
    "Antilope",
    "Fledermaus",
    "Bar",
    "Biber",
    "Biene",
    "Vogel",
    "Bison",
  ],
  sciences: [
    "Astronomie",
    "Biochemie",
    "Biologie",
    "Botanik",
    "Zelle",
    "Chemie",
    "Klimatologe",
    "Daten",
    "Elektrizitat",
    "Energie",
  ],
  nourritures: [
    "Apfel",
    "Avocado",
    "Baguette",
    "Bananen",
    "Rindfleisch",
    "Brot",
    "Brokkoli",
    "Burrito",
    "Butter",
    "Kuchen",
  ],
  métiers: [
    "buchhalter",
    "Schauspieler",
    "Berater",
    "Botschafter",
    "Animateur",
    "Bogenschutze",
    "Kunstler",
    "Astronaut",
    "Sportler",
    "Rechtsanwalt",
  ],
  sports: [
    "American Football",
    "Schiessen",
    "leichtathletik",
    "Badminton",
    "baseball",
    "Basketball",
    "Biathlon",
    "bobsleigh",
    "Bowling",
    "Boxen",
  ],
}

const DICOES = {
  animaux: [
    "caiman",
    "anaconda",
    "hormiga",
    "antilope",
    "murcielago",
    "oso",
    "castor",
    "abeja",
    "pajaro",
    "bisonte",
  ],
  sciences: [
    "astronomia",
    "bioquimica",
    "biologia",
    "botanica",
    "celula",
    "quimica",
    "climatologo",
    "datos",
    "electricidad",
    "energía",
  ],
  nourritures: [
    "manzana",
    "aguacate",
    "baguette",
    "platano",
    "carne",
    "pan",
    "brocoli",
    "burrito",
    "mantequilla",
    "pastel",
  ],
  métiers: [
    "contable",
    "actor",
    "asesor",
    "embajador",
    "animador",
    "arquero",
    "artista",
    "astronauta",
    "atleta",
    "abogado",
  ],
  sports: [
    "futbolamericano",
    "disparando",
    "atletismo",
    "badminton",
    "beisbol",
    "baloncesto",
    "biatlon",
    "bobsleigh",
    "bolos",
    "boxeo",
  ],
}
const DICOEN = {
  animaux: [
    "alligator",
    "anaconda",
    "ant",
    "antelope",
    "bat",
    "bear",
    "beaver",
    "bee",
    "bird",
    "bison",
  ],
  sciences: [
    "astronomy",
    "biochemistry",
    "biology",
    "botany",
    "cell",
    "chemistry",
    "climatologist",
    "data",
    "electricity",
    "energy",
  ],
  nourritures: [
    "apple",
    "avocado",
    "baguette",
    "bananas",
    "beef",
    "bread",
    "broccoli",
    "burrito",
    "butter",
    "cake",
  ],
  métiers: [
    "accountant",
    "actor",
    "advisor",
    "ambassador",
    "animator",
    "archer",
    "artist",
    "astronaut",
    "athlete",
    "attorney",
  ],
  sports: [
    "americanfootball",
    "shooting",
    "athletics",
    "badminton",
    "baseball",
    "basketball",
    "biathlon",
    "bobsleigh",
    "bowling",
    "boxing",
  ],
}