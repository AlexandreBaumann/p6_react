import './carousel.css';
import React, { useState } from 'react';

//enlever les fleches et le 1/1 quand il n'y a qu'une seule image
// Affiner la présentation
// trait reste présent sur la page active
// rajouter le tex


function Carousel({ pictures }) {  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + pictures.length) % pictures.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  return (
    <div className='carousel'>
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt="Carousel"
          style={{ display: index === currentImageIndex ? 'block' : 'none' }}
        />
      ))}
      <div className='controls'>
        <i className="fa-sharp fa-solid fa-chevron-left" onClick={prevImage}></i>
        <i className="fa-sharp fa-solid fa-chevron-right" onClick={nextImage}></i>
      </div>
      <p className='carousel-num'>{`${currentImageIndex + 1}/${pictures.length}`}</p>
    </div>
  );
}

export default Carousel;