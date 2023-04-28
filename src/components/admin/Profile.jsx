import React from "react";

import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { UserBlog } = useSelector((state) => state.authLogin);
  return (
    <div className="d-flex w-100 justify-content-center align-item-center py-4">
      <Container className="border border-2 rounded rounded-2 p-5 mx-2">
        <Row className="mb-3">
          <Col>
            <Form.Label>First Name</Form.Label>
            <p className="rounded-2 p-2 border border-1">
              {UserBlog && UserBlog.first_name}
            </p>
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <p className="rounded-2 p-2 border border-1">
              {UserBlog && UserBlog.last_name}
            </p>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <p className="rounded-2 p-2 border border-1">
            {UserBlog && UserBlog.email}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="floatingSelect">
          <Form.Label>Role</Form.Label>
          <p className="rounded-2 p-2 border border-1">
            {UserBlog && UserBlog.role_blog}
          </p>
        </Form.Group>
      </Container>
    </div>
  );
};

export default Profile;
