import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Rundel from '../components/Rundel';
import Gallery from './Gallery';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Title />
              <Rundel />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
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

const Title = () => {
  return (
    <div className="title">
      <Link to="/gallery">AI Art Gallery</Link>
    </div>
  );
};

export default App;
