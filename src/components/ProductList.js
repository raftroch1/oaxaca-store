import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../utils/shopify';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const allProducts = await getProducts();
        console.log('All products:', allProducts); // Debug log
        const categoryProducts = allProducts.filter(product => 
          product.productType.toLowerCase() === category.toLowerCase()
        );
        console.log('Filtered products:', categoryProducts); // Debug log
        setProducts(categoryProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found in this category.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-brown-800 capitalize">{category} Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {product.images && product.images[0] && (
              <img src={product.images[0].src} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            )}
            <h2 className="text-lg font-semibold text-brown-800">{product.title}</h2>
            <p className="text-brown-600">
              {product.variants[0]?.price ? `$${product.variants[0].price.amount}` : 'Price not available'}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;