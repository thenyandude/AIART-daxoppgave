import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [imageNames, setImageNames] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/images')
      .then(response => response.json())
      .then(data => {
        setImageNames(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  const imagePath = (imageName) => {
    return `http://localhost:3001/image/${encodeURIComponent(imageName)}`;
  };

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (loading) return <div>Loading...</div>;

  if (imageNames.length === 0) {
    return <div className="no-images-message">O/AI MAKES NO ART, MAKE SOME INSTEAD, OR LEAVE THAT TO SUCKERBURGZ &lt;3</div>;
  }

  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>COMPUTER Presents A.I. Art</h1>
      </header>
      <div className="image-grid">
        {imageNames.map((imageName, index) => (
          <div key={index} className="image-item" onClick={() => handleImageClick(imageName)}>
            <img src={imagePath(imageName)} alt={`Artwork ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img 
            src={imagePath(selectedImage)} 
            alt="Enlarged Artwork" 
            className="enlarged-image" 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
