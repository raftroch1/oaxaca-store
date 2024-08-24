import React from'react';
import { BrowserRouter, Route, Switch } from'react-router-dom';
import styled from'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const HomePage = () => {
  return (
    <Container>
      <Header>
        <h1>Oaxaca Store</h1>
      </Header>
      <main>
        <h2>Welcome to our store!</h2>
        <p>
          We offer a wide range of products, including artisanal goods, clothing, and accessories.
        </p>
      </main>
      <Footer>
        <p>&copy; 2023 Oaxaca Store</p>
      </Footer>
    </Container>
  );
};

const ProductPage = () => {
  return (
    <Container>
      <Header>
        <h1>Oaxaca Store</h1>
      </Header>
      <main>
        <h2>Product Page</h2>
        <p>
          This is a sample product page. You can add product details, images, and more here.
        </p>
      </main>
      <Footer>
        <p>&copy; 2023 Oaxaca Store</p>
      </Footer>
    </Container>
  );
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