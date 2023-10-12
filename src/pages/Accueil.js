import React, {useState} from 'react';
import LangueTitre from '../components/Titres/LangueTitre';
import ActiviteTitre from '../components/Titres/ActiviteTitre';
import BoutonLangues from '../components/Boutons/BoutonLangues';
import BoutonActivite from '../components/Boutons/BoutonActivite';
import Banniere from '../components/Banniere';
import Footer from '../components/Footer';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'animate.css';


const Accueil = ({pays, setPays}) => {

    const [show, setShow]= useState(false);
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    
    const onClick = () => {
        if (!show) {
            setShow(true);
        }
        setShowA(true);
    }

    let history = useHistory()
    function handleClick(){
        history.push({
            pathname : "/pendu",
        })

    }

    return (
        <>
            <Banniere />
            <div className="container animate__animated animate__fadeIn">
                <div className="row mx-auto">
                    <LangueTitre pays={pays}/>
                    <div className="row mx-auto">
                        <div className="col" onClick = {onClick}>
                            <BoutonLangues pays = {pays} setPays = {setPays}/>
                        </div>
                    </div>
                    {
                        show?<ActiviteTitre />:null
                    }

                    {
                        show?<BoutonActivite pays = {pays} />:null
                    }                        
                </div>

            </div>
            <ToastContainer position="top-end" className="mt-2 me-2">
                <Toast show={showA} onClose={toggleShowA} delay={10000} autohide>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Nouveauté</strong>
                        <small>Il y a 1h</small>
                    </Toast.Header>
                    <Toast.Body className='text-center' >
                        <p>Un nouveau jeu est disponible<br/>(Le pendu)</p>
                        <button className='btn btn-primary' onClick={handleClick}>Voir</button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            <Footer />
        </>
        
    )
}

export default Accueil;