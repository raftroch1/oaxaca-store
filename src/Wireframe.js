import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={ProductPage} />
          <Route path="/products/:id" component={ProductDetails} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;