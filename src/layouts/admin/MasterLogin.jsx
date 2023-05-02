import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { reset, userBlogLogin } from "../../features/AuthSlice";
import { PageTittle } from "../../TittleName";

const MasterLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  PageTittle("Login Blog");
  const { UserBlog, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.authLogin
  );

  useEffect(() => {
    if (UserBlog || isSuccess) {
      Swal.fire({
        title: "Login Success",
        icon: "success",
      });
      navigate("/mdproadmin/home");
    }
    dispatch(reset());
  }, [UserBlog, isSuccess, dispatch, navigate]);

  const AuthUserBlog = (e) => {
    e.preventDefault();
    dispatch(userBlogLogin({ email, password }));
  };

  return (
    <div className="w-100 myLogin">
      <Container
        className="border border-2 rounded rounded-2 p-5 mx-2"
        style={{ width: "500px" }}
      >
        <h2 className="text-center">Sign in</h2>
        <Form
          className="d-flex flex-column justifty-content-center align-item-center"
          onSubmit={AuthUserBlog}
        >
          <Form.Text className="text-muted"></Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*********"
              value={password}
              required
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {isError && <p className="text-danger text-center fs-6">{message}</p>}

          <Button variant="primary" type="submit" className="mt-1">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default MasterLogin;
