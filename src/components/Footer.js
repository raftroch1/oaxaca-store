import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px 0;
  text-align: center;
  margin-top: 40px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Oaxaca Store</p>
    </FooterContainer>
  );
};

export default Footer;