import React, { useState } from "react";
import './CatImage.css'
import axios from "axios";

function CatImage() {
  const [imageUrl, setImageUrl] = useState("");

  const getCatImage = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => setImageUrl(response.data[0].url))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      
      <div className="image-container">
        {!imageUrl && <h1>Welcome, click button to get image</h1>}
        {imageUrl && <img src={imageUrl} alt="Cat" />}
      </div>
      <button onClick={getCatImage}>CLICK ME!</button>
    </div>
  );
}

export default CatImage;
