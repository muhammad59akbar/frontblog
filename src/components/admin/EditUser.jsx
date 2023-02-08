import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const EditUser = () => {
  return (
    <div className="d-flex w-100 justify-content-center align-item-center py-5">
      <Container className="border border-2 rounded rounded-2 p-5 mx-2">
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" disabled />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" disabled />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="floatingSelect">
            <Form.Label>Role</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </Form.Select>
          </Form.Group>
          <Button>Save</Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditUser;
