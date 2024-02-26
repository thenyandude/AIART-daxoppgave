import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you have this line to import your CSS

const App = () => {
  return (
    <div className="app">
      <Header />
      <RundellsCarousel />
      <Footer />
    </div>
  );
};


const Header = () => {
  return (
    <div className="header">
      <h1>Computer</h1>
      <div className="image-container">
        <img src="http://localhost:3001/images/DALL·E 2024-02-25 13.56.23 - Visualize a high-performance computer with a transparent case, as seen through the artistic lens of 12th century Japan. This concept marries the sophi.webp" alt="Artistic High-Performance Computer" />
      </div>
    </div>
  );
};


const RundellsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "DALL·E 2024-02-25 13.55.27 - Imagine an aquarelle (watercolor) painting that depicts a serene forest scene in Germany. The artwork captures the lush greenery of the German country.webp",
    "DALL·E 2024-02-25 13.58.07 - Envision a powerful and mystical scene where the Four Horsemen of the Apocalypse are majestically riding robotic dragons. Each horseman, cloaked in an.webp",
    "DALL·E 2024-02-25 13.55.56 - Revise the scene once more, placing the Viking warrior with green eyes and red hair, and his baby dragon companion, at the forefront of a Viking ship,.webp",
    // Add any additional images if necessary
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  // Function to create a valid path for your images
  const imagePath = (imageName) => {
    return `http://localhost:3001/images/${encodeURIComponent(imageName)}`;
  };

  return (
    <div className="carousel image-container">
      <img 
        src={imagePath(images[currentIndex])} 
        alt="Artistic Depiction" 
        key={images[currentIndex]} 
      />
    </div>
  );
};



const Footer = () => {
  return (
    <div className="footer">
      <a href="/gallery">AI Art Gallery</a>

      <a href="/gallery">Rundell</a>
    </div>
  );
};


export default App;
