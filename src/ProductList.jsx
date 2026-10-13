import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './App.css';

// Replace any image URL below with your own if one stops loading.
const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.png', description: 'Produces oxygen at night, improving air quality.', cost: '$15' },
      { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3529186_1280.jpg', description: 'Filters formaldehyde and xylene from the air.', cost: '$12' },
      { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg', description: 'Removes mold spores and purifies the air.', cost: '$18' },
      { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg', description: 'Adds humidity and removes toxins from the air.', cost: '$20' },
      { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg', description: 'Easy to care for and effective at purifying the air.', cost: '$17' },
      { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'Purifies the air and soothes skin irritations.', cost: '$14' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400', description: 'Calming scent, used in aromatherapy.', cost: '$20' },
      { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=400', description: 'Sweet fragrance, promotes relaxation.', cost: '$18' },
      { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg', description: 'Invigorating scent, also a culinary herb.', cost: '$15' },
      { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg', description: 'Refreshing aroma, great for teas and cooking.', cost: '$12' },
      { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg', description: 'Citrusy scent that calms the mind.', cost: '$14' },
      { name: 'Hydrangea', image: 'https://cdn.pixabay.com/photo/2019/07/22/09/59/hydrangea-4355531_1280.jpg', description: 'Large, showy blooms with a gentle scent.', cost: '$22' },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      { name: 'Oregano', image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg', description: 'Natural insect repellent, also a kitchen staple.', cost: '$10' },
      { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg', description: 'Bright flowers that deter common garden pests.', cost: '$8' },
      { name: 'Geranium', image: 'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg', description: 'Scented leaves that keep mosquitoes away.', cost: '$20' },
      { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2018/08/23/07/35/thai-basil-3625544_1280.jpg', description: 'Repels flies and mosquitoes, loved in cooking.', cost: '$9' },
      { name: 'Catnip', image: 'https://cdn.pixabay.com/photo/2015/07/02/10/40/catnip-828740_1280.jpg', description: 'Repels mosquitoes; cats love it too.', cost: '$13' },
      { name: 'Citronella', image: 'https://cdn.pixabay.com/photo/2017/10/23/17/09/lemongrass-2882605_1280.jpg', description: 'Well-known mosquito-repelling grass.', cost: '$16' },
    ],
  },
];

// Simple green placeholder used if a thumbnail fails to load
const FALLBACK_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='220'><rect width='100%' height='100%' fill='#dfe9dc'/><text x='50%' y='52%' font-size='54' text-anchor='middle'>🌿</text></svg>`
  );

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(true);

  // Total number of items (sum of quantities) shown next to the cart icon
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setShowPlants(false);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
    setShowPlants(true);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="navbar-brand" onClick={handleHomeClick}>
          <span className="brand-leaf" aria-hidden="true">🌿</span>
          <span>
            <span className="brand-name">Paradise Nursery</span>
            <span className="brand-sub">Where green meets serenity</span>
          </span>
        </a>
        <div className="navbar-links">
          <a href="#plants" onClick={handlePlantsClick}>Plants</a>
          <a href="#cart" className="cart-link" onClick={handleCartClick} aria-label={`Shopping cart, ${totalQuantity} items`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="40" width="40">
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>
            </svg>
            <span className="cart_quantity_count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {showPlants && !showCart && (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <section key={category.category} className="category-section">
              <h2 className="plantname_heading">
                <span className="plant_heading">{category.category}</span>
              </h2>
              <div className="product-list">
                {category.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = FALLBACK_IMG;
                      }}
                    />
                    <h3 className="product-title">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-price">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {showCart && <CartItem onContinueShopping={handleContinueShopping} />}
    </div>
  );
}

export default ProductList;
