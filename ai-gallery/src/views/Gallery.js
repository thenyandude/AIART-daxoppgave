import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [imageNames, setImageNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/images') // Update this line
      .then(response => response.json())
      .then(data => {
        setImageNames(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        // Handle the error state as needed
      });
  }, []);
  

  const imagePath = (imageName) => {
    return `http://localhost:3001/image/${encodeURIComponent(imageName)}`;
  };
  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>COMPUTER Presents A.I. Art</h1>
      </header>
      <div className="image-grid">
        {imageNames.map((imageName, index) => (
          <div key={index} className="image-item">
            <img src={imagePath(imageName)} alt={`Artwork ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
