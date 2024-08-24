import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API
    const fetchProducts = async () => {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default ProductList;