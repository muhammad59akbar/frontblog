import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import * as AiIcons from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { MyaccBlog } from "../../features/AuthSlice";
import axios from "axios";
import Swal from "sweetalert2";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getUserBlog, setgetUserBlog] = useState([]);

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

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    axios
      .get("https://blog-app-tan-six.vercel.app/userBlogku")
      .then(({ data }) => {
        setgetUserBlog(data);
      });
  };

  const deleteUserBlog = async (userBlogId) => {
    const isConffirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConffirm) {
      return;
    }

    await axios
      .delete(`https://blog-app-tan-six.vercel.app/${userBlogId}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        fetchUser();
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.msg,
          icon: "error",
        });
      });
  };

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
            {getUserBlog.map((res, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{res.first_name}</td>
                  <td>{res.last_name}</td>
                  <td>{res.email}</td>
                  <td>{res.role_blog}</td>
                  <td className="p-1 d-flex flex-row justify-content-center">
                    <NavLink
                      to={`/mdproadmin/Users/Edit/${res.uuid}`}
                      className="btn btn-success m-1"
                    >
                      <AiIcons.AiFillEdit />
                    </NavLink>

                    <Button
                      variant="danger"
                      className="m-1"
                      onClick={() => deleteUserBlog(res.uuid)}
                    >
                      <AiIcons.AiFillDelete />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Users;
