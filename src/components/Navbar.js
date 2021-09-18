import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const navbar = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">Harry porter database</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default navbar;
