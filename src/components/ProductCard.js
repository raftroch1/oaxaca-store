import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../utils/shopify';

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await getProduct(id);
        console.log('Fetched product:', JSON.stringify(fetchedProduct, null, 2));
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const renderPrice = (price) => {
    if (!price) return 'Price not available';
    if (typeof price === 'string') return `$${price}`;
    if (typeof price === 'object') {
      if (price.amount && price.currencyCode) {
        return `${price.currencyCode} ${parseFloat(price.amount).toFixed(2)}`;
      }
      return JSON.stringify(price);
    }
    return 'Price not available';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          {product.images && product.images[0] && (
            <img src={product.images[0].src} alt={product.title} className="w-full rounded-lg shadow-lg" />
          )}
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl mb-4">{renderPrice(product.variants[0]?.price)}</p>
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}></div>
          <button className="bg-brown-600 text-white px-6 py-2 rounded hover:bg-brown-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;