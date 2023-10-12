import React from 'react'
import Countdown from 'react-countdown';

const BoutonLangues = ({pays, setPays}) => {

    const handleChange = (e) => {
        pays = e.currentTarget.name
        setPays(pays)
        e.currentTarget.style.opacity = "1"
    }


    return (
        <div className="container">
            <div className="row text-center py-1">
                <div className="col-6 col-md">
                    <button className="btn opacitybutton shadow-none" data-bs-toggle="button" onClick={handleChange} name="Français">
                        <img src="./images/DrapeauFrance.png" className="rounded" alt="DrapFrance" width="120" height="60" />
                        <h3>Français</h3>
                    </button>
                </div>

                <div className="col-6 col-md">
                    <button className="btn opacitybutton shadow-none" data-bs-toggle="button" onClick={handleChange} name="Anglais">
                        <img src="./images/DrapeauUK.png" className="rounded" alt="DrapUK" width="120" height="60" />
                        <h3>Anglais</h3>
                    </button>
                </div>

                <div className="col-6 col-md">
                    <button className="btn opacitybutton shadow-none" data-bs-toggle="button" onClick={handleChange} name="Allemand">
                        <img src="./images/DrapeauAllemagne.png" className="rounded" alt="DrapAllemagne" width="120" height="60" />
                        <h3>Allemand</h3>
                    </button>
                </div>

                <div className="col-6 col-md">
                    <button className="btn opacitybutton shadow-none" onClick={handleChange} name="Espagnol">
                        <img src="./images/DrapeauEspagne.png" className="rounded" alt="DrapEspagne" width="120" height="60" />
                        <h3>Espagnol</h3>
                    </button>
                </div>

                <div className="col-6 col-md">
                    <button className="btn opacitybutton shadow-none" data-bs-toggle="button" name="Français">
                        <div className="row text-center tailleimg rounded" style={{backgroundImage: 'url("./images/DrapeauItalie.png")'}}>
                            <div className='my-auto'>
                                <strong><Countdown date={'2021-12-19T00:00:00'} /></strong>
                            </div>
                        </div>
                        <h3>Italien</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BoutonLangues
