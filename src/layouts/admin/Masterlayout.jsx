import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbaradmin from "../../components/admin/Navbaradmin";
import SidebarAdmin from "../../components/admin/SidebarAdmin";
import RoutesAdmin from "./RoutesAdmin";

const Masterlayout = () => {
  const [show, setShow] = useState(false);
  const clickShow = () => setShow(!show);

  return (
    <>
      <Navbaradmin show={show} clickShow={clickShow} />
      <div className="d-flex  w-100">
        <SidebarAdmin show={show} />
        <div
          className={
            show ? "fadded-main-content main-content " : "main-content"
          }
        >
          <Container>
            <Routes>
              {RoutesAdmin.filter((route) => route.component).map(
                ({ path, component: Component }, idx) => {
                  return (
                    <Route key={idx} path={path} element={<Component />} />
                  );
                }
              )}
              <Route
                path="*"
                element={<Navigate to="/mdproadmin/dashboard" />}
              />
            </Routes>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Masterlayout;
