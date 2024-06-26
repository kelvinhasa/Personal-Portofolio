import React, { useState } from "react";
import Popup from "./Popup";
import "./AnimalCard.css";

const AnimalCard = ({ animal }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="container">
      <div onClick={() => setShowPopup(true)}>
        <img src={animal.image} alt={animal.name} width={200} height={200} />
        <div className="containerFooter">
          <h3 className="noMargin">{animal.name}</h3>
          <p className="noMargin">{animal.origin}</p>
        </div>
      </div>
      {showPopup && (
        <Popup animal={animal} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default AnimalCard;
