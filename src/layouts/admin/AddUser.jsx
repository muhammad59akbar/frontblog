import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyaccBlog } from "../../features/AuthSlice";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, SetMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, UserBlog } = useSelector((state) => state.authLogin);

  useEffect(() => {
    dispatch(MyaccBlog());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (UserBlog && UserBlog.role_blog !== "Admin") {
      navigate("/mdproadmin");
    }
  }, [isError, UserBlog, navigate]);

  const createUserBlog = async (e) => {
    e.preventDefault();
    if (!firstName.trim()) {
      alert("The First Name cannot be blank");
      return;
    }
    if (!lastName.trim()) {
      alert("The Last Name cannot be blank");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/userBlogku", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        role: role,
      });
      Swal.fire({
        icon: "success",
        text: response.data.msg,
      });
      navigate("/mdproadmin/Users");
    } catch (error) {
      if (error.response) {
        SetMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="d-flex w-100 justify-content-center align-item-center py-5">
      <Container className="border border-2 rounded rounded-2 p-5 mx-2">
        <Form onSubmit={createUserBlog}>
          {msg ? (
            <p
              className="text-secondary text-center fs-6 border border-danger rounded py-2 mb-2"
              style={{ background: "#f7d7da" }}
            >
              {msg}
            </p>
          ) : (
            ""
          )}
          <Row className="mb-3">
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="First name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="true"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="true"
              required
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="floatingSelect">
            <Form.Label>Role</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={role}
              required
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Open this select menu</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Save</Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddUser;
