import React from 'react'
import { useHistory } from 'react-router';
import 'animate.css'


const CompAteliers = ({pays}) => {

    let history = useHistory()
    function handleClickPendu(){
        history.push({
            pathname : "/pendu",
        })

    }

    function handleClickCrossword(){
        history.push({
            pathname : "/crossword",
        })

    }
    
    console.log(pays)

    return (
        <div className="container-fluid paddingbanniere animate__animated animate__fadeInUp">
            <div class="jumbotron jumbotron-fluid colortitle3 py-2">
                <div class="container">
                    <h1 class="display-4 colortextbanniere">Ateliers</h1>
                </div>
            </div>

            <div className="container pt-5 mt-5">
                <div className="row py-3 mx-auto">
                    <div className="col-md-6 mb-4 text-center">
                        <div className="card mx-auto" style={{ width:288 }} >
                            <img className="card-img-top" src="./images/pendu.jpeg" alt="Jeu du pendu"/>
                            <div className="card-body">
                                <h5 className="card-title">Jeu du pendu</h5>
                                <p className="card-text pb-2">Le but du jeu est de deviner toute les lettres qui doivent composer un mot</p>
                                <button className="btn btn-primary" onClick={handleClickPendu}>Jouer</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center mb-5">
                        <div className="card mx-auto" style={{width : 292}}>
                            <img className="card-img-top" src="./images/motcroise.png" alt="Cardimagecap"/>
                            <div className="card-body">
                                <h5 className="card-title">Mot Croisé</h5>
                                <p className="card-text pb-2">Retrouver tous les mots d'une grille à l'aide des définitions données en annexe</p>
                                <button className="btn btn-primary" onClick={handleClickCrossword}>Jouer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompAteliers;

