import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, userBlogLogout } from "../../features/AuthSlice";

const Navbaradmin = ({ show, clickShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { UserBlog } = useSelector((state) => state.authLogin);
  const Logout = () => {
    dispatch(userBlogLogout());
    dispatch(reset());
    navigate("/auth/mdprologin");
  };
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
              title={`Signed in as: ${UserBlog && UserBlog.email}`}
              id="collasible-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="/mdproadmin/Profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                href={`/mdproadmin/Change=Password/${
                  UserBlog && UserBlog.uuid
                }`}
              >
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbaradmin;
