import React from 'react';

function Product({ name, price }) {
  const addToCart = () => {
    console.log(`${name} added to cart.`);
    // Implement cart functionality here
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="/path/to/product-image.jpg" alt={name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-700">{price}</p>
        <button 
          onClick={addToCart} 
          className="mt-4 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
