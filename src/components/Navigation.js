import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #f1f1f1;
  padding: 10px;
`;

const NavLink = styled(Link)`
  margin-right: 15px;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
    </Nav>
  );
};

export default Navigation;