import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Pour les styles

const Caroussel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pour avancer au slide suivant
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Pour reculer au slide précédent
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Nettoyage de l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Caroussel;
