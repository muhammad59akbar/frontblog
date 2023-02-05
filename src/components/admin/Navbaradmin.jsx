import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Navbaradmin = ({ show, clickShow }) => {
  const nama = "abay@gmail.com";
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>MDPRO ADMIN</Navbar.Brand>
        <div
          className="text-white fs-4 d-flex justify-content-center align-items-center"
          onClick={clickShow}
        >
          {show ? <FaIcons.FaBars /> : <AiIcons.AiOutlineClose />}
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title={`Signed in as: ${nama}`}
              id="collasible-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbaradmin;
