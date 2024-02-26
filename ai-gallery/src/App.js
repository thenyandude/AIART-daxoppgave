import React from 'react';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>Computer</h1>
      <div className="image-placeholder">
        <img src="/mnt/aiart/images//mnt/aiart/images/DALL·E 2024-02-25 13.56.35 - Imagine a high-performance computer with a transparent case, transformed through the lens of Art Nouveau style. This artistic approach brings out the .webp" alt="" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>AI Art Gallery</p>
      <div className="small-placeholder">
        <p>rundell</p>
      </div>
    </div>
  );
};

export default App;
