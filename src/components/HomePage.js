import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #fff9c4, #ffcc80)',
      color: '#4e342e',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    link: {
      background: '#009688',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontSize: '1.2rem',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Oaxaca Artisan Market</h1>
      <Link to="/product" style={styles.link}>
        View Our Featured Product
      </Link>
    </div>
  );
};

export default HomePage;