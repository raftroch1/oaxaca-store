import React from 'react';
import Product from './Product'; // Assuming you have a Product component

function App() {
  return (
    <div className="bg-fixed bg-cover bg-opacity-50" style={{ backgroundImage: `url('/src/images/oaxaca-background.jpg')` }}>
      <div className="container mx-auto p-4">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-teal-700">Welcome to Our Store</h1>
        </header>
        
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Product Components */}
          <Product name="Product 1" price="$10" />s
          <Product name="Product 2" price="$20" />
          <Product name="Product 3" price="$30" />
          {/* Add more Product components as needed */}
        </main>
      </div>
    </div>
  );
}

export default App;
