import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MasterLogin = () => {
  return (
    <div className="w-100 myLogin">
      <Container
        className="border border-2 rounded rounded-2 p-5 mx-2"
        style={{ width: "500px" }}
      >
        <h2 className="text-center">Sign in</h2>
        <Form className="d-flex flex-column justifty-content-center align-item-center">
          <Form.Text className="text-muted"></Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="*********" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default MasterLogin;
