import React from 'react'
import ReactTooltip from 'react-tooltip'

const Footer = () => {
    return (
        <footer className="py-1 colortitle3 footer">
                {/* <p className="me-4 py-2 text-white">
                    <span className="text-center">Copyright © 2021 All right reserved | MARIE Nicolas & GRANIE Romain</span>
                </p> */}
                <div class="d-flex justify-content-between mx-4 text-white">
                    <div data-tip="Permet de demander de l'aide via un mail">
                        <a className='btn btn-outline-warning border1' href='mailto:help@langact.com?subject=Aide' role="button">
                            <strong>Aide</strong>
                        </a>
                    </div>
                    <div className='my-auto'>
                        Copyright © 2021 All right reserved | MARIE Nicolas & GRANIE Romain
                    </div>
                </div>
                <ReactTooltip effect='solid' backgroundColor='#FF9F31' textColor='black'/>
        </footer>
    )
}

export default Footer
