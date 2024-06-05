import React from 'react';
import './Popup.css';

const Popup = ({ animal, onClose }) => (
  <div className="popup-overlay" onClick={onClose}>
    <div className="popup-inner" onClick={e => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>X</button>
      <img src={animal.image} alt={animal.name} className="animal-image" />
      <h3>{animal.name}</h3>
      <p>Origin: {animal.origin}</p>
      <p>{animal.description}</p>
    </div>
  </div>
);

export default Popup;
