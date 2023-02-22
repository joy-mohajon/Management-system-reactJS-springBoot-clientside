import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="m-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Add Student</Nav.Link>
          <Nav.Link href="#pricing">Show Details</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Layout;
