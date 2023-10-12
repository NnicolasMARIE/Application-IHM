import React from 'react'
import { useHistory } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';

const BoutonActivite = ({pays}) => {
    
    let history = useHistory()

    function handleClickM(){
        //console.log("enfant", e.target.childNodes[0].data.toLowerCase())
        //console.log(e)
        history.push({
            pathname : "/magazines",
        });

    }

    function handleClickA(){
        history.push({
            pathname : "/ateliers",
        });

    }

    function handleClickO(){
        history.push({
            pathname : "/outils",
        });

    }

    /* function handleClick(e){
        let url = e.target.childNodes[0].data.toLowerCase()
        console.log(url)
        history.push({
            pathname : "/"+url,
        })
    } */

  

    return (
        <div className="container animate__animated animate__fadeIn">
            <div className="row text-center py-2 mb-5">
                <div className="col-xl-4 my-2">
                    <div onClick={handleClickM} data-tip="Partie contenant des livres et des magazines" className="borderbutton rounded" style={{cursor:'pointer'}}>
                        <button className="btn shadow-none">
                            <img src="./images/Magazines.png" alt="magazines" width="315" height="225" />
                        </button>
                    </div>
                </div>

                <div className="col-xl-4 my-2">
                    <div onClick={handleClickA} data-tip="Partie contenant des jeux" className="borderbutton rounded" style={{cursor:'pointer'}}>
                        <button className="btn shadow-none" >
                            <img src="./images/Ateliers.png" alt="ateliers" width="315" height="225" />
                        </button>
                    </div>
                </div>

                <div className="col-xl-4 my-2">
                    <div onClick={handleClickO} data-tip="Partie avec du lexique et des vidéos" className="borderbutton rounded" style={{cursor:'pointer'}}>
                        <button className="btn shadow-none" >
                            <img src="./images/Outils.png" alt="outils" width="315" height="225" />
                        </button>
                    </div>
                </div>
            </div>
            <ReactTooltip effect='solid' backgroundColor='#FF9F31' textColor='black'/>
        </div>
    )
}

export default BoutonActivite
