import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// If RundellsCarousel is a component from another file, import it here
// import RundellsCarousel from './RundellsCarousel';


const Rundel = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isSliding, setIsSliding] = useState(false);
    const images = [
      "DALL·E 2024-02-25 13.55.27 - Imagine an aquarelle (watercolor) painting that depicts a serene forest scene in Germany. The artwork captures the lush greenery of the German country.webp",
      "DALL·E 2024-02-25 13.58.07 - Envision a powerful and mystical scene where the Four Horsemen of the Apocalypse are majestically riding robotic dragons. Each horseman, cloaked in an.webp",
      "DALL·E 2024-02-25 13.55.56 - Revise the scene once more, placing the Viking warrior with green eyes and red hair, and his baby dragon companion, at the forefront of a Viking ship,.webp",
      // Add any additional images if necessary
    ];
  
    // Function to create a valid path for your images
    const imagePath = (imageName) => {
      return `http://localhost:3001/images/${encodeURIComponent(imageName)}`;
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsSliding(true); // Start the slide out animation
  
        // After the slide out animation duration, switch to the next image and slide in
        setTimeout(() => {
          setIsSliding(false); // Reset to slide in for the next image
          setCurrentIndex(nextIndex);
          setNextIndex((nextIndex + 1) % images.length);
        }, 1000); // This should match the slide out animation duration
      }, 3000); // Change image every 3 seconds + slide out animation duration
  
      return () => clearTimeout(timer);
    }, [currentIndex, nextIndex, images.length]);
  
    return (
      <div className="carousel image-container">
        <Link to ="/gallery">
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