import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Container, Navbar, Nav } from 'react-bootstrap';

const FixedContainer = styled(Container)`  
  width: 100%;
  position: relative;
  padding: 0;
  height:100px;
  z-index: 999;
  &:before{
    content: "";
    background-color: rgba(248,249,250,0.9);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
  }
`;

const CustomNavbar = styled(Navbar)`  
  position: fixed;
  top: 0px;
  width: inherit;
  max-width: inherit;  
  padding-bottom: 50px;
  background-color:transparent !important;
`;

const FontSelect = (props) => {
  return (
    <FixedContainer>
      <CustomNavbar bg="light" expand="lg">
        <Navbar.Brand  href="/" >PDF Cert - Generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </CustomNavbar>
    </FixedContainer>
  );
};

export default FontSelect;