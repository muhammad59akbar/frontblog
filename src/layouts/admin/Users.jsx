import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import * as AiIcons from "react-icons/ai";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";

const Users = () => {
  return (
    <>
      <Container className="my-3">
        <Table striped bordered hover size="sm" responsive="xl">
          <thead>
            <tr className="text-center">
              <th className="p-2">No</th>
              <th className="p-2">First Name</th>
              <th className="p-2">Last Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>1</td>
              <td>adsadsdasadsadsadsadsdasdas</td>
              <td>Ajaasdasdasdasddasdasadsads</td>
              <td>abayaja@gmail.com</td>
              <td>Admin</td>
              <td className="p-1 d-flex flex-row justify-content-center">
                <NavLink
                  to="/mdproadmin/Users/Edit"
                  className="btn btn-success m-1"
                >
                  <AiIcons.AiFillEdit />
                </NavLink>

                <Button variant="danger" className="m-1">
                  <AiIcons.AiFillDelete />
                </Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Muhammad</td>
              <td>Rizki Akbar</td>
              <td>abayaja@gmail.com</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Users;
