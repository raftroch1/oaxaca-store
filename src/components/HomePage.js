import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const OaxacaBackground = require('../images/OaxacaBackground.jpg');

  return (
    <div className="relative flex items-center justify-center h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${OaxacaBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Welcome to Oaxaca Artisan Market</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">Discover unique handcrafted treasures from Oaxaca</p>
        
        <Link to="/products/clothing" className="bg-brown-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-brown-700 transition-colors duration-300">
          Explore Our Products
        </Link>
      </div>
    </div>
  );
};

export default HomePage;