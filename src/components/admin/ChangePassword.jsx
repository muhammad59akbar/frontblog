import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { MyaccBlog } from "../../features/AuthSlice";

const ChangePassword = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, SetMsg] = useState("");
  const params = useParams();
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
    if (UserBlog && UserBlog.uuid !== params.id) {
      navigate("/mdproadmin");
    } else {
      setFirstName(UserBlog && UserBlog.first_name);
      setLastName(UserBlog && UserBlog.last_name);
      setEmail(UserBlog && UserBlog.email);
      setRole(UserBlog && UserBlog.role_blog);
    }
  }, [isError, UserBlog, navigate, params]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/userBlogku/${params.id}`)
  //     .then((response) => {
  //       setFirstName(response.data.first_name);
  //       setLastName(response.data.last_name);
  //       setEmail(response.data.email);
  //       setRole(response.data.role_blog);
  //     });
  // }, [params]);

  const updatepassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `https://blog-app-tan-six.vercel.app/userBlogku/${params.id}`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          confirmpassword: confirmpassword,
          role: role,
        }
      );
      Swal.fire({
        icon: "success",
        text: response.data.msg,
      });
      navigate("/mdproadmin/Profile");
    } catch (error) {
      if (error.response) {
        SetMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="d-flex w-100 justify-content-center align-item-center py-5">
      <Container className="border border-2 rounded rounded-2 p-5 mx-2">
        <Form onSubmit={updatepassword}>
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
                value={firstName === null ? "" : firstName}
                disabled
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last name"
                value={lastName === null ? "" : lastName}
                disabled
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email === null ? "" : email}
              disabled
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
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              autoComplete="true"
              required
              disabled
              value={role === null ? "" : role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>

          <Button type="submit">Save</Button>
        </Form>
      </Container>
    </div>
  );
};

export default ChangePassword;
