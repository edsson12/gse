import React, { useState } from 'react';
import axios from 'axios';

function CatImage() {
  const [imageUrl, setImageUrl] = useState('');

  const getCatImage = () => {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => setImageUrl(response.data[0].url))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <button onClick={getCatImage}>Get Cat Image</button>
      {imageUrl && <img src={imageUrl} alt="cat" />}
    </div>
  );
}

export default CatImage;
