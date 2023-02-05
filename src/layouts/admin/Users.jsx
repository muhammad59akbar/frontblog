import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import * as AiIcons from "react-icons/ai";

import Button from "react-bootstrap/Button";

const Users = () => {
  return (
    <>
      <Container className="my-3">
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Abay</td>
              <td>Aja</td>
              <td>abayaja@gmail.com</td>
              <td>Admin</td>
              <td>
                <Button variant="success" className="mx-2">
                  <AiIcons.AiFillEdit />
                </Button>
                <Button variant="danger">
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
