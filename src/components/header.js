import React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import 'animate.css';

const HeaderContainer = styled.header`
  height: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
