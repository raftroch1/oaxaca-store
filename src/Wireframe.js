import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// ... existing styled components ...

const Navigation = styled.nav`
  background-color: #f1f1f1;
  padding: 10px;
`;

const NavLink = styled.a`
  margin-right: 15px;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

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

const HomePage = () => {
  return (
    <Container>
      <Header>
        <h1>Oaxaca Store</h1>
      </Header>
      <Navigation>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/about">About</NavLink>
      </Navigation>
      <main>
        <h2>Welcome to our store!</h2>
        <p>
          We offer a wide range of products, including artisanal goods, clothing, and accessories.
        </p>
        <ProductGrid>
          {/* Add sample product cards here */}
          <ProductCard>
            <h3>Product 1</h3>
            <p>$19.99</p>
          </ProductCard>
          <ProductCard>
            <h3>Product 2</h3>
            <p>$24.99</p>
          </ProductCard>
          {/* Add more product cards as needed */}
        </ProductGrid>
      </main>
      <Footer>
        <p>&copy; 2023 Oaxaca Store</p>
      </Footer>
    </Container>
  );
};

const ProductPage = () => {
  // ... existing ProductPage component ...
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;