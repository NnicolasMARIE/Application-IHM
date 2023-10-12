import React from 'react'

const Banniere = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid colortitle2">
                <div class="container">
                    {/* <h1 class="display-4">Fluid jumbotron</h1> */}
                    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                    <img src="./Images/logo.png" alt="logo" className="img-fluid rounded align-self-center " style={{height:100}}/>
                </div>
            </div>
            
        </div>
    )
}

export default Banniere
