import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ styles }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <div 
        style={styles.dropdown}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link to="/products" style={styles.link}>
          Products ▼
        </Link>
        {isDropdownOpen && (
          <div style={styles.dropdownContent}>
            <Link to="/products/clothing" style={styles.dropdownLink}>Clothing</Link>
            <Link to="/products/kitchen" style={styles.dropdownLink}>Kitchen</Link>
            <Link to="/products/art" style={styles.dropdownLink}>Art</Link>
          </div>
        )}
      </div>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
};

export default Navigation;