import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import OaxacaStore from './components/OaxacaStore';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

// Placeholder components for demonstration
const About = () => <div className="p-5">About Page</div>;
const Contact = () => <div className="p-5">Contact Page</div>;

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-beige-100">
        <header className="bg-brown-800 text-beige-100 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Oaxaca Artisan Market</h1>
            <nav className="flex items-center space-x-4">
              <Link to="/" className="nav-link">Home</Link>
              <div 
                className="relative"
                ref={dropdownRef}
              >
                <button 
                  className="nav-link"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  Products
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-beige-100 rounded-md shadow-lg py-1 z-10">
                    <Link to="/products/clothing" className="block px-4 py-2 text-sm text-brown-800 hover:bg-brown-200" onClick={closeDropdown}>Clothing</Link>
                    <Link to="/products/kitchen" className="block px-4 py-2 text-sm text-brown-800 hover:bg-brown-200" onClick={closeDropdown}>Kitchen</Link>
                    <Link to="/products/art" className="block px-4 py-2 text-sm text-brown-800 hover:bg-brown-200" onClick={closeDropdown}>Art</Link>
                  </div>
                )}
              </div>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductCard />} />
            <Route path="/products/:category" element={<ProductCard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;