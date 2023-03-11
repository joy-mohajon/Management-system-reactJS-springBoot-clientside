import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/"></Nav.Link>
            {/* <Nav.Link href="/student/">Add Student</Nav.Link>
            <Nav.Link href="/addcourse/">Add Course</Nav.Link> */}
            <Nav.Link href="/signin">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            {/* <Nav.Link href="/ShowDetails/">Show Details</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
