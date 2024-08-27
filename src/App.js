import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const About = () => <div className="p-5">About Page</div>;
const Contact = () => <div className="p-5">Contact Page</div>;
const NotFound = () => <div className="p-5">Page Not Found</div>;

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleProductClick = (category) => {
    navigate(`/products/${category}`);
    closeDropdown();
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
    <header className="bg-brown-800 text-beige-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Oaxaca Artisan Market</Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="nav-link">Home</Link>
          <div className="relative" ref={dropdownRef}>
            <button 
              className="nav-link"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              Products
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-beige-100 rounded-md shadow-lg py-1 z-10">
                <button onClick={() => handleProductClick('clothing')} className="block w-full text-left px-4 py-2 text-sm text-brown-800 hover:bg-brown-200">Clothing</button>
                <button onClick={() => handleProductClick('kitchen')} className="block w-full text-left px-4 py-2 text-sm text-brown-800 hover:bg-brown-200">Kitchen</button>
                <button onClick={() => handleProductClick('art')} className="block w-full text-left px-4 py-2 text-sm text-brown-800 hover:bg-brown-200">Art</button>
              </div>
            )}
          </div>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <NavBar />
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:fullId" element={<ProductCard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;