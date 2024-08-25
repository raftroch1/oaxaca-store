import React from 'react';

const ProductCard = ({ name, price, colors, imageUrl, hoverImageUrl, onAddToCart }) => {
  return (
    <div className="group block overflow-hidden">
      <div className="relative h-[350px] sm:h-[450px]">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src={hoverImageUrl}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>

        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">${price.toFixed(2)}</p>

          <p className="text-xs uppercase tracking-wide">{colors} Colors</p>
        </div>

        <button 
          onClick={onAddToCart}
          className="mt-2 w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;