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
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/student/">Add Student</Nav.Link>
            <Nav.Link href="/addcourse/">Add Course</Nav.Link>
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
