import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import OaxacaStore from './components/OaxacaStore';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<OaxacaStore />} />
      </Routes>
    </Router>
  );
};

export default App;