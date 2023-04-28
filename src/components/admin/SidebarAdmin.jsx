import React from "react";
import * as AiIcons from "react-icons/ai";
import * as TfiIcons from "react-icons/tfi";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, userBlogLogout } from "../../features/AuthSlice";

const SidebarAdmin = ({ show }) => {
  const { UserBlog } = useSelector((state) => state.authLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(userBlogLogout());
    dispatch(reset());
    navigate("/auth/mdprologin");
  };
  return (
    <div
      className={show ? "fadded-sidebar-admin sidebar-admin" : "sidebar-admin "}
    >
      <Container fluid>
        <Nav className="d-flex flex-column">
          <div className="d-flex flex flex-row align-items-center text-white fs-5 py-2   border-bottom border-white">
            <AiIcons.AiFillDashboard className="fs-3 mx-4" />
            <Nav.Link href="/mdproadmin/dashboard" className="text-white ">
              Dashboard
            </Nav.Link>
          </div>
          <div className="d-flex flex flex-row align-items-center text-white fs-5 py-2   border-bottom border-white">
            <TfiIcons.TfiWrite className="fs-3 mx-4" />
            <Nav.Link href="/mdproadmin/Write-Blog" className="text-white ">
              Write Blog
            </Nav.Link>
          </div>
          <div className="d-flex flex flex-row align-items-center text-white fs-5 py-2   border-bottom border-white">
            <HiIcons.HiOutlineViewGrid className="fs-3 mx-4" />
            <Nav.Link href="/mdproadmin/ViewBlog" className="text-white ">
              View Blog
            </Nav.Link>
          </div>

          {UserBlog && UserBlog.role_blog === "Admin" && (
            <>
              <div className="d-flex flex flex-row align-items-center text-white fs-5 py-2   border-bottom border-white">
                <FaIcons.FaUserEdit className="fs-3 mx-4" />
                <Nav.Link href="/mdproadmin/Add-User" className="text-white ">
                  Add Users
                </Nav.Link>
              </div>
              <div className="d-flex flex flex-row align-items-center text-white fs-5 py-2   border-bottom border-white">
                <FaIcons.FaUserAlt className="fs-3 mx-4" />
                <Nav.Link href="/mdproadmin/Users" className="text-white ">
                  Users
                </Nav.Link>
              </div>
            </>
          )}

          <div className="d-flex flex flex-row align-items-center text-white fs-5 py-2   border-bottom border-white">
            <RiIcons.RiLogoutBoxRLine className="fs-3 mx-4" />
            <Nav.Link onClick={Logout} className="text-white ">
              Logout
            </Nav.Link>
          </div>
        </Nav>
      </Container>
      <div
        className="d-flex flex-column align-items-center text-white py-2"
        style={{ background: "#343a40" }}
      >
        <h2 className="fs-5">Logged in as</h2>
        <span>{UserBlog && UserBlog.email}</span>
      </div>
    </div>
  );
};

export default SidebarAdmin;
