import "./galerie.scss";
import React, { useState } from "react";

// Affiner la présentation
// Rajouter une vérification pour empecher le cas de figure http://localhost:3000/fiche-produit/cb02
//responsive

function Galerie({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + pictures.length) % pictures.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  if (pictures.length === 1) {
    return (
      <div className="galerie">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt="galerie"
            style={{ display: index === currentImageIndex ? "block" : "none" }}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="galerie">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt="galerie"
            style={{ display: index === currentImageIndex ? "block" : "none" }}
          />
        ))}
        <div className="controls">
          <i
            className="fa-sharp fa-solid fa-chevron-left"
            onClick={prevImage}
          ></i>
          <i
            className="fa-sharp fa-solid fa-chevron-right"
            onClick={nextImage}
          ></i>
        </div>
        <p className="galerie-num">{`${currentImageIndex + 1}/${
          pictures.length
        }`}</p>
      </div>
    );
  }
}

export default Galerie;
