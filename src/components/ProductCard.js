import React from 'react';
import { useParams } from 'react-router-dom';

const ProductCard = () => {
  const { category } = useParams();

  // Sample product data (you would typically fetch this from an API)
  const products = {
    clothing: [
      { name: "Traditional Huipil", price: 89.99, colors: 4 },
      { name: "Embroidered Blouse", price: 59.99, colors: 3 },
    ],
    kitchen: [
      { name: "Talavera Plates Set", price: 49.99, colors: 2 },
      { name: "Handmade Clay Pot", price: 34.99, colors: 1 },
    ],
    art: [
      { name: "Alebrije Figurine", price: 79.99, colors: 5 },
      { name: "Oaxacan Rug", price: 129.99, colors: 3 },
    ],
  };

  if (!category) {
    return (
      <div>
        <h2>All Products</h2>
        <p>Please select a category from the menu.</p>
      </div>
    );
  }

  const categoryProducts = products[category] || [];

  if (categoryProducts.length === 0) {
    return (
      <div>
        <h2>{category} Products</h2>
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {categoryProducts.map((product, index) => (
          <div key={index} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '15px', 
            width: '200px' 
          }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Colors: {product.colors}</p>
            <button style={{
              backgroundColor: '#009688',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;