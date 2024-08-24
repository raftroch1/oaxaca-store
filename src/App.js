import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Colorful Textiles', price: 49.99, image: '/api/placeholder/300/200' },
  { id: 2, name: 'Handmade Pottery', price: 39.99, image: '/api/placeholder/300/200' },
  { id: 3, name: 'Oaxacan Spices', price: 14.99, image: '/api/placeholder/300/200' },
  { id: 4, name: 'Artisanal Mezcal', price: 59.99, image: '/api/placeholder/300/200' },
];

const OaxacaStore = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const currentProduct = products[currentProductIndex];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #fff9c4, #ffcc80)',
      color: '#4e342e',
      fontFamily: 'sans-serif',
    },
    header: {
      background: '#009688',
      color: 'white',
      padding: '1rem',
      position: 'relative',
      overflow: 'hidden',
    },
    headerTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      position: 'relative',
      zIndex: 10,
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem',
    },
    productCard: {
      background: 'linear-gradient(to bottom right, #ffcc80, #ffab91)',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    productImage: {
      width: '16rem',
      height: '16rem',
      borderRadius: '0.375rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    button: {
      background: '#009688',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    cartSection: {
      background: 'linear-gradient(to top right, #ffccbc, #fff9c4)',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
    },
    footer: {
      background: '#3e2723',
      color: 'white',
      textAlign: 'center',
      padding: '1rem',
      marginTop: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Oaxaca Artisan Market</h1>
      </header>
      
      <main style={styles.main}>
        <div style={styles.productCard}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
            <button onClick={prevProduct} style={{...styles.button, fontSize: '1.5rem'}}>
              &#8249;
            </button>
            <div style={{...styles.productImage, background: `url(${currentProduct.image}) center/cover no-repeat`}}></div>
            <button onClick={nextProduct} style={{...styles.button, fontSize: '1.5rem'}}>
              &#8250;
            </button>
          </div>
          <h2 style={{fontSize: '1.5rem', fontWeight: 'semibold', marginBottom: '0.5rem'}}>{currentProduct.name}</h2>
          <p style={{fontSize: '1.25rem', marginBottom: '1rem'}}>${currentProduct.price.toFixed(2)}</p>
          <button 
            onClick={() => addToCart(currentProduct)}
            style={styles.button}
          >
            Add to Cart
          </button>
        </div>

        <div style={styles.cartSection}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 'semibold', marginBottom: '1rem', display: 'flex', alignItems: 'center'}}>
            <span style={{marginRight: '0.5rem'}}>&#128722;</span> Cart
          </h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} style={{marginBottom: '0.5rem'}}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Oaxaca Artisan Market. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OaxacaStore;