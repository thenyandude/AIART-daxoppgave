import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Rundel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/images')
      .then(response => response.json())
      .then(data => {
        setImages(data);
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setCurrentIndex(randomIndex);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  useEffect(() => {
    if (images.length <= 1) return; // If only one image, no need to cycle

    const timer = setTimeout(() => {
      setIsSliding(true);

      setTimeout(() => {
        setIsSliding(false);
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentIndex(randomIndex);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  const imagePath = (imageName) => {
    return `http://localhost:3001/image/${encodeURIComponent(imageName)}`;
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="carousel image-container">
      <Link to="/gallery">
        <img
          src={imagePath(images[currentIndex])}
          alt="Artistic Depiction"
          className={isSliding ? 'slideOut' : 'slideIn'}
          key={images[currentIndex]}
        />
      </Link>
    </div>
  );
};

export default Rundel;
