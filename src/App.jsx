import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        {!showProductList && (
          <div className="landing-content">
            <div className="landing-hero">
              <h1>Paradise Nursery</h1>
              <p className="tagline">Where green meets serenity</p>
              <button
                className="get-started-button"
                onClick={() => setShowProductList(true)}
              >
                Get Started
              </button>
            </div>
            <div className="about-us-box">
              <AboutUs />
            </div>
          </div>
        )}
      </div>

      {showProductList && (
        <div className="product-list-container visible">
          <ProductList onHomeClick={() => setShowProductList(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
