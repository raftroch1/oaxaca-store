import React, { useState, useEffect } from 'react';
import { getProducts } from '../utils/shopify'; // Assume this function exists to fetch products from Shopify

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const OaxacaBackground = require('../images/OaxacaBackground.jpg');

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[calc(100vh-16rem)] bg-beige-100 overflow-hidden pt-16 pb-8">
      {/* ... existing background code ... */}
      
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brown-800">Welcome to Oaxaca Artisan Market</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-brown-600 mb-8">Discover unique handcrafted treasures from Oaxaca</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.images[0].src} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-lg font-semibold text-brown-800">{product.title}</h2>
              <p className="text-brown-600">${product.variants[0].price}</p>
              {/* Add a button or link to the product page */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;