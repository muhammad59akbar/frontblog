import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navbaruser = () => {
  return (
    <Navbar
      className=" position-fixed top-0 w-100 bg-white border-bottom  border-dark z-3"
      expand="lg"
      style={{ zIndex: "100" }}
    >
      <Container>
        <Navbar.Brand className="fw-bold fs-2 ">My Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto text-center fs-5 ">
            <Nav.Link href="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="/Blog" className="mx-2">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbaruser;
