import React from 'react'

//import PDF pour magazines
import PDF1 from '../data/Français EBOOK/Courrier_International_-_14_10_2021.pdf';
import PDF2 from '../data/Français EBOOK/Lib_233_ration_-_16_10_2021.pdf';
import PDF3 from '../data/Français EBOOK/louys_aphrodite_moeurs_antiques.pdf';
import PDF4 from '../data/Français EBOOK/FrenchPDF-Comment-je-suis-devenu-stupide.pdf';
import PDF5 from '../data/Français EBOOK/Livre Changez de vie avec la PNL Anthony Robbins - POUVOIR ILLIMITE.pdf';
import PDF6 from '../data/Français EBOOK/National_Geographic_Traveler_France_-_Octobre-D_cembre_2021_UserUpload_Net.pdf';

import PDF7 from '../data/Anglais EBOOK/english-today-magazine debutant.pdf';
import PDF8 from '../data/Anglais EBOOK/vocable-anglais confirmé.pdf';
import PDF9 from '../data/Anglais EBOOK/The_Adventures_of_Tom_Sawyer_NT.pdf';
import PDF10 from '../data/Anglais EBOOK/elif-safak-esq-kko-eng.pdf';
import PDF11 from '../data/Anglais EBOOK/ILE Intermediaire.pdf';
import PDF12 from '../data/Anglais EBOOK/One_Night_At_The_Refuge_-_Nalini_Singh.pdf';

import PDF13 from '../data/Allemand EBOOK/vocable-allemand.pdf';
import PDF14 from '../data/Allemand EBOOK/SchnitzlerCasanova.pdf';
import PDF15 from '../data/Allemand EBOOK/Der_SPIEGEL_6.11.21_de.downmagaz.net.pdf';
import PDF16 from '../data/Allemand EBOOK/cupdf.com_vocable-allemand-613.pdf';
import PDF17 from '../data/Allemand EBOOK/Stresemann.pdf';
import PDF18 from '../data/Allemand EBOOK/ZweigGeheimnis.pdf';

import PDF19 from '../data/Espagnol EBOOK/Luna-Azul.pdf';
import PDF20 from '../data/Espagnol EBOOK/Magazine Salud mental en escuelas vulnerables.pdf';
import PDF21 from '../data/Espagnol EBOOK/ElPrincipito.pdf';
import PDF22 from '../data/Espagnol EBOOK/Magazine Texto.pdf';
import PDF23 from '../data/Espagnol EBOOK/Magazine vocable-espagnol.pdf';
import PDF24 from '../data/Espagnol EBOOK/TousVosLivres - Don Quijote en espagnol.pdf';
import 'animate.css'




const CompMagazines = ({pays}) => {

    return (
        <div class="container-fluid paddingbanniere animate__animated animate__fadeInLeft">
            <div class="jumbotron jumbotron-fluid colortitle3 py-2">
                <div class="container">
                    <h1 class="display-4 colortextbanniere">Magazines</h1>
                </div>
            </div>

            <div className='container pt-4'>
                <div>
                    {pays === "Français" ?
                    <>
                        <div className="row text-center pt-3 mx-auto">
                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF1} target="_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineFR1.png" className="rounded" alt="magazineFR1" width="200" height="272" />
                                </a>
                                <p>Courrier international</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF2} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineFR2.png" className="rounded" alt="magazineFR2" width="200" height="272" />
                                </a>
                                <p>Libération</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF3} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineFR3.png" className="rounded" alt="magazineFR3" width="200" height="272" />                   
                                </a>
                                <p>Aphrodite</p>
                            </div>
                        </div>
                        
                        <div className="row text-center pt-3 mx-auto mb-5">
                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF4} target="_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineFR4.png" className="rounded" alt="magazineFR1" width="200" height="272" />
                                </a>
                                <p className='pb-3'>Comment je suis devenu stupide</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF5} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineFR5.png" className="rounded" alt="magazineFR2" width="200" height="272" />
                                </a>
                                <p>Pouvoir illimité</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF6} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineFR6.png" className="rounded" alt="magazineFR3" width="200" height="272" />                  
                                </a>
                                <p>National geographic</p>
                            </div>
                        </div> 

                    </>:""
                    }
                </div>



                <div>
                    {pays === "Anglais" ?
                    <>
                        <div className="row text-center pt-3 mx-auto">
                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF7} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineUK1.png" className="rounded" alt="magazineUK1" width="200" height="272" />
                                </a>
                                <p>English today</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF8} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineUK2.png" className="rounded" alt="magazineUK2" width="200" height="272" />
                                </a>
                                <p>Vocable</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF9} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineUK3.png" className="rounded" alt="magazineUK3" width="200" height="272" />
                                </a>
                                <p>The adventures of Tom Sawyer</p>
                            </div>
                        </div>

                        <div className="row text-center pt-3 mx-auto mb-5">
                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF10} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineUK4.png" className="rounded" alt="magazineUK1" width="200" height="272" />
                                </a>
                                <p>The forty rules of love</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF11} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineUK5.png" className="rounded" alt="magazineUK2" width="200" height="272" />
                                </a>
                                <p>I love english</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF12} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineUK6.png" className="rounded" alt="magazineUK3" width="200" height="272" />
                                </a>
                                <p>One night at the refuge</p>
                            </div>
                        </div>

                    </> : ""
                    }
                </div>



                <div>
                    {pays === "Allemand" ?
                    <>

                        <div className="row text-center pt-3 mx-auto">
                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF13} target="_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineDE1.png" className="rounded" alt="magazineDE1" width="200" height="272" />
                                </a>
                                <p>Vocable</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF14} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineDE2.png" className="rounded" alt="magazineDE2" width="200" height="272" />
                                </a>
                                <p>Casanovas heimfahrt</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF15} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineDE3.png" className="rounded" alt="magazineDE3" width="200" height="272" />
                                </a>
                                <p>Der spiegel</p>
                            </div>
                        </div>

                        <div className="row text-center pt-3 mx-auto mb-5">
                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF16} target="_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineDE4.png" className="rounded" alt="magazineDE1" width="200" height="272" />
                                </a>
                                <p>Vocable</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF17} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineDE5.png" className="rounded" alt="magazineDE2" width="200" height="272" />
                                </a>
                                <p>Die entwicklung der berliner flaschenbiergeschaefts</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF18} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineDE6.png" className="rounded" alt="magazineDE3" width="200" height="272" />
                                </a>
                                <p>Brennendes geheimnis</p>
                            </div>
                        </div>

                    </> : ""
                    }
                </div>



                <div>
                    {pays === "Espagnol" ?
                    <>
                        <div className="row text-center pt-3 mx-auto">
                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF19} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineES1.png" className="rounded" alt="magazineES1" width="200" height="272" />
                                </a>
                                <p>Luna azul</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF20} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineES2.png" className="rounded" alt="magazineES2" width="200" height="272" />
                                </a>
                                <p>Revista de psicología</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF21} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineES3.png" className="rounded" alt="magazineES3" width="200" height="272" />
                                </a>
                                <p>El principito</p>
                            </div>
                        </div>

                        <div className="row text-center pt-3 mx-auto mb-5">
                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF22} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineES4.png" className="rounded" alt="magazineES1" width="200" height="272" />
                                </a>
                                <p>Tres tradiciones en la teoría de la legitimidad política</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF23} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineES5.png" className="rounded" alt="magazineES2" width="200" height="272" />
                                </a>
                                <p>Vocable</p>
                            </div>

                            <div className="col-md-4 mb-5 my-3">
                                <a  href = {PDF24} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesMagazines/magazineES6.png" className="rounded" alt="magazineES3" width="200" height="272" />
                                </a>
                                <p>Don quijote de la mancha</p>
                            </div>
                        </div>

                    </> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default CompMagazines;