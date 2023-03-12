import React, { useState } from "react";
import "./CatImage.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

function CatImage({ theme, toggleTheme, icon }) {
 
  const [images, setImages] = useState([]);

  const getCatImage = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        const newImage = {
          id: response.data[0].id,
          url: response.data[0].url,
        };
        setImages((prevState) => [...prevState, newImage]);
      })
      .catch((error) => console.error(error));
  };
  const removeImage = id => {
    setImages(prevState => prevState.filter(image => image.id !== id));
  };

  return (
    <div className="container" id={theme}>
       {!images && <h1>Welcome, click button to get image</h1>} 
      <div className="image-container">
      
        {images.map((image) => (
          <div className="card" key={image.id}>
            <div className="card-inside">
            <img src={image.url} alt="cat" loading="lazy" />
            <button className="remove" onClick={() => removeImage(image.id)}>-</button>
            </div>
            <p>Hi, i´m a new image!</p>
          </div>
          
        ))}
      </div>
      <button className="btn" onClick={getCatImage}>
        CLICK ME!
      </button>
      <button className="toggleTheme" onClick={toggleTheme}>
        <FontAwesomeIcon
          color={icon ? "#092327" : "#90C2E7"}
          icon={icon ? faMoon : faLightbulb}
        />
      </button>
      
    </div>
  );
}

export default CatImage;
