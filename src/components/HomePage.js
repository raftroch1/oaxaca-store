import React from 'react';

const HomePage = () => {
  const OaxacaBackground = require('../images/OaxacaBackground.jpg');

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[calc(100vh-16rem)] bg-beige-100 overflow-hidden pt-16 pb-8">
      <div 
        className="absolute inset-0 bg-no-repeat opacity-50 md:opacity-60 lg:opacity-70"
        style={{
          backgroundImage: `url(${OaxacaBackground})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          top: '4rem', // This adds space at the top
          bottom: '2rem', // This adds space at the bottom
        }}
      ></div>
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brown-800">Welcome to Oaxaca Artisan Market</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-brown-600">Discover unique handcrafted treasures from Oaxaca</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default HomePage;