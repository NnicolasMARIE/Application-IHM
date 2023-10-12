import React from 'react';
//import pdf pour lexique
import Pdf1 from '../data/Outils Français/Differences_Lexique_Vocabulaire.pdf';
import Pdf2 from '../data/Outils Français/TA_12030.pdf';
import Pdf3 from '../data/Outils Français/conjugaisons.pdf';
import Pdf4 from '../data/Outils Anglais/LEXIQUE_ANGLAIS_DEBUTANT.pdf';
import Pdf5 from '../data/Outils Anglais/LEXIQUE_ANGLAIS_INTERMEDIAIRE.pdf';
import Pdf6 from '../data/Outils Anglais/liste-verbes-irreguliers.pdf';
import Pdf7 from '../data/Outils Allemand/Fiche-de-vocabulaire-1.pdf';
import Pdf8 from '../data/Outils Allemand/Fiche-de-vocabulaire-9.pdf';
import Pdf9 from '../data/Outils Allemand/verbes-irreguliers-allemands2.pdf';
import Pdf10 from '../data/Outils Espagnol/Vocabulaire espagnol basique amp essentiel vacances Cooltoural.pdf';
import Pdf11 from '../data/Outils Espagnol/Vocabulaire-et-expressions-de-base-en-espagnol.pdf-973.pdf';
import Pdf12 from '../data/Outils Espagnol/présent-irréguliers.pdf';
import 'animate.css'


const CompOutils = ({pays}) => {
    
    return (
        <div className="container-fluid paddingbanniere animate__animated animate__fadeInRight">
            <div class="jumbotron jumbotron-fluid colortitle3 py-2">
                <div class="container">
                    <h1 class="display-4 colortextbanniere">Outils</h1>
                </div>
            </div>

            <div className="container pt-4">

                <div className="row text-center">
                    <div className="col p-2  colortitle rounded">
                        <h3 className="text-white align-middle">Lexique</h3>
                    </div>
                </div>


                <div>
                    {pays === "Français" ?
                    <>
                        <div className="row py-2 m-5 mx-auto">
                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf1} target="_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauFranceDeb.png" className="rounded" alt="DrapeauFranceDeb" width="200" height="140" />
                                </a>
                            </div>
                    
                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf2} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauFranceInt.png" className="rounded" alt="DrapeauFranceInt" width="200" height="140" />
                                </a>
                            </div>

                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf3} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauFranceAd.png" className="rounded" alt="DrapeauFranceAd" width="200" height="140" />                    
                                </a>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col p-2  colortitle rounded">
                                <h3 className="text-white align-middle">Cours</h3>
                            </div>
                        </div>

                        <div className="row py-4 mb-3 mx-auto">
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2" width="405" height="250" src="https://www.youtube.com/embed/2sCXhPefmz8?list=PLcoQWyFpRIxgcTcTpz-hmpDqhcRq701sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLcoQWyFpRIxjtSHTsjYjzfdaAhtLHCsNT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2 mb-5" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLcoQWyFpRIxhfLbOqHtZ32I8xlhS7GGos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </> : ""
                    }
                </div>



                <div>
                    {pays === "Anglais" ?
                    <>
                        <div className="row py-2 m-5 mx-auto">
                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf4} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauUKDeb.png" className="rounded" alt="DrapeauUKDeb" width="200" height="140" />
                                </a>
                            </div>

                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf5} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauUKInt.png" className="rounded" alt="DrapeauUKInt" width="200" height="140" />
                                </a>
                            </div>

                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf6} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauUKAd.png" className="rounded" alt="DrapeauUKAd" width="200" height="140" />
                                </a>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col p-2  colortitle rounded">
                                <h3 className="text-white align-middle">Cours</h3>
                            </div>
                        </div>

                        <div className="row py-3 mb-3 mx-auto">
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLF08grTl_UqUtiadA6-VgE3TRosOO2cor" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLF08grTl_UqXYNzF2SptVnG2uPrOdYpQx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2 mb-5" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLF08grTl_UqUyXOcP2zC5XNrELuHH5fue" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </> : ""
                    }
                </div>



                <div>
                    {pays === "Allemand" ?
                    <>
                        <div className="row py-2 m-5 mx-auto">
                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf7} target="_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauDEDeb.png" className="rounded" alt="DrapeauDEDeb" width="200" height="140" />
                                </a>
                            </div>

                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf8} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauDEInt.png" className="rounded" alt="DrapeauDEInt" width="200" height="140" />
                                </a>
                            </div>

                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf9} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauDEAd.png" className="rounded" alt="DrapeauDEAd" width="200" height="140" />
                                </a>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col p-2  colortitle rounded">
                                <h3 className="text-white align-middle">Cours</h3>
                            </div>
                        </div>

                        <div className="row py-3 mb-3 mx-auto">
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLsoAwWtvF3L21elI_A9UWOvsNWDt9g0j0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLsoAwWtvF3L3ayzWjN_SE7XhHy2EX7YYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2 mb-5" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLsoAwWtvF3L2xpsfwaAEfmqfnlZSv-O53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </> : ""
                    }
                </div>



                <div>
                    {pays === "Espagnol" ?
                    <>
                        <div className="row py-2 m-5 mx-auto">
                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf10} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauESDeb.png" className="rounded" alt="DrapeauESDeb" width="200" height="140" />
                                </a>
                            </div>

                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf11} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauESInt.png" className="rounded" alt="DrapeauESInt" width="200" height="140" />
                                </a>
                            </div>

                            <div className="col-md-4 my-auto text-center">
                                <a className="btn" href = {Pdf12} target = "_blank" rel="noreferrer">
                                    <img src="./images/ImagesDrapeauNiveau/DrapeauESAd.png" className="rounded" alt="DrapeauESAd" width="200" height="140" />
                                </a>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col p-2  colortitle rounded">
                                <h3 className="text-white align-middle">Cours</h3>
                            </div>
                        </div>

                        <div className="row py-3 mb-3 mx-auto">
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2" width="405" height="250" src="https://www.youtube.com/embed/videoseries?list=PLpjfRdJjT034Q8b6TfzdiNQXYLbNJsR50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2" width="405" height="250" src="https://www.youtube.com/embed/ONTVQvzESpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div className="col-xl-4 text-center">
                                <iframe class="my-2 mb-5" width="405" height="250" src="https://www.youtube.com/embed/y8i0flRvvMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </> : ""
                    }
                </div>
            </div>
        </div> 
        
    );
};

export default CompOutils;

