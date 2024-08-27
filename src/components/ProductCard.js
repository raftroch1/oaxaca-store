import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../utils/shopify';

const ProductCard = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { fullId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedProduct = await getProduct(fullId);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          console.log('Fetched product in component:', fetchedProduct);
        } else {
          setError('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [fullId]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8">{error}</div>;
  }

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  // Construct the Shopify product URL
  const shopifyProductUrl = product.onlineStoreUrl || `https://${process.env.REACT_APP_SHOPIFY_DOMAIN}/products/${product.handle}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-brown-800">{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {product.images && product.images[0] && (
            <img src={product.images[0].src} alt={product.title} className="w-full rounded-lg shadow-md" />
          )}
        </div>
        <div>
          <p className="text-xl font-semibold text-brown-600 mb-4">
            ${product.variants[0]?.price.amount}
          </p>
          <div className="prose prose-brown mb-6" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          {shopifyProductUrl && (
            <a 
              href={shopifyProductUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brown-600 text-white px-4 py-2 rounded hover:bg-brown-700 transition duration-300"
            >
              View on Shopify
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;