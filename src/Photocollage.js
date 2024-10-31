import React from "react";
import "./photocollage.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

const Photocollage = () => {
  const images = [img1, img2, img3];

  return (
    <div className="collage-container">
      {images.map((image, index) => (
        <div key={index} className="collage-item">
          <img src={image} alt={`Collage ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Photocollage;
