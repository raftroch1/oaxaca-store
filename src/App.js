import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import OaxacaStore from './components/OaxacaStore';
import Footer from './components/Footer';

// Placeholder components for demonstration
const About = () => <div style={{padding: '20px'}}>About Page</div>;
const Products = () => <div style={{padding: '20px'}}>Products Page</div>;
const Contact = () => <div style={{padding: '20px'}}>Contact Page</div>;

const App = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#fff9c4', // Light yellow background
    },
    header: {
      backgroundColor: '#009688', // Teal color
      color: 'white',
      padding: '1rem',
    },
    nav: {
      backgroundColor: '#00796b', // Darker teal for nav
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
    },
    link: {
      color: 'white',
      margin: '0 10px',
      textDecoration: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    activeLink: {
      backgroundColor: '#004d40', // Even darker teal for active link
    },
    content: {
      flexGrow: 1,
      padding: '20px',
    },
  };

  return (
    <Router>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>Oaxaca Artisan Market</h1>
        </header>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/product" style={styles.link}>Product</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<OaxacaStore />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;