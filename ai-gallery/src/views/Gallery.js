import React from 'react';
import './Gallery.css'; // Make sure to create a corresponding CSS file
import imagePaths from '../components/ImageData'; // Import the array of image paths

const Gallery = () => {
  // Function to create a valid path for your images
  const imagePath = (imageName) => {
    return `http://localhost:3001/images/${encodeURIComponent(imageName)}`;
  };

  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>COMPUTER Presents A.I. Art</h1>
      </header>
      <div className="image-grid">
        {imagePaths.map((imageName, index) => (
          <div key={index} className="image-item">
            <img src={imagePath(imageName)} alt={`Artwork ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
