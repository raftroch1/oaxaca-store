import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
});

export const getProducts = async () => {
  try {
    const products = await client.product.fetchAll();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    console.log('Fetching product with ID:', id);
    // If the ID is already in the correct format, use it as is
    // Otherwise, construct the full Shopify Global ID
    const fullId = id.includes('gid://shopify/Product/') 
      ? id 
      : `gid://shopify/Product/${id}`;
    console.log('Full ID:', fullId);
    const product = await client.product.fetch(fullId);
    console.log('Fetched product:', product);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    if (error.message) {
      console.error('Error message:', error.message);
    }
    if (error.response) {
      console.error('Error response:', error.response);
    }
    return null;
  }
};