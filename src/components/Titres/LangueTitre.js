import React from "react";

const LangueTitre = ({pays}) => {
  return (
    <div className="container">
      <div className="row py-5 text-center">
        <div className="col p-3  colortitle rounded">
          <h3 className="text-white align-middle">
            {pays === "" ?
              <>Veuillez choisir une langue </> 
              : 
              <>Vous avez sélectionné : {pays} </>
            }
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LangueTitre;