import img4 from "./images/images.jpg";
import img5 from "./images/img4.jpeg";
import img6 from "./images/img5.webp";

const Photocollage2 = () => {
    const images = [img4, img5, img6];
  
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
  
  export default Photocollage2;