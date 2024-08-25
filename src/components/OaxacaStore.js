import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const OaxacaStore = () => {
  const [cartItems, setCartItems] = useState([]);

  const product = {
    name: "Limited Edition Sports Trainer",
    price: 189.99,
    colors: 6,
    imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
  };

  const addToCart = () => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

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
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>← Back to Home</Link>
        <h1 style={styles.headerTitle}>Oaxaca Artisan Market</h1>
      </header>
      
      <main style={styles.main}>
        <div style={styles.productCard}>
          <ProductCard
            name={product.name}
            price={product.price}
            colors={product.colors}
            imageUrl={product.imageUrl}
            hoverImageUrl={product.hoverImageUrl}
            onAddToCart={addToCart}
          />
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