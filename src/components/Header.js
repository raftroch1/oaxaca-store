import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  padding: 20px 0;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Oaxaca Store</h1>
    </HeaderContainer>
  );
};

export default Header;