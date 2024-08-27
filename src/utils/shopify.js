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