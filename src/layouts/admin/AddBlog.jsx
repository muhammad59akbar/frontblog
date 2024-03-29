import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Button, Figure } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyaccBlog } from "../../features/AuthSlice";
import { PageTittle } from "../../TittleName";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDesc] = useState("");
  const [prev, setPrev] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  PageTittle("Add Blog");

  const { isError } = useSelector((state) => state.authLogin);

  useEffect(() => {
    dispatch(MyaccBlog());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [navigate, isError]);

  const loadImage = (e) => {
    const images = e.target.files[0];
    if (!images.name.match(/\.(jpg|jpeg|png)$/)) {
      return false;
    }
    setImg(images);
    setPrev(URL.createObjectURL(images));
  };

  const addPost = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("The Title cannot be blank");
      return;
    }
    if (!description.trim()) {
      alert("The Description cannot be blank");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("img", img);
    try {
      const response = await axios.post(
        "https://blog-app-navy-one.vercel.app/proBlogAdmin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire({
        icon: "success",
        text: response.data.msg,
      });
      navigate("/mdproadmin/ViewBlog");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="d-flex w-100 justify-content-center align-item-center py-5">
      <Container className="border border-2 rounded rounded-2 p-5 mx-2">
        <Form onSubmit={addPost}>
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
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Title Image</Form.Label>
            <Form.Control
              type="file"
              required
              name="img"
              onChange={loadImage}
            />
            {prev ? (
              <Figure className="w-100 mt-2">
                <Figure.Image
                  style={{ width: "100%", height: "500px" }}
                  alt="171x180"
                  src={prev}
                />
              </Figure>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
              required
              style={{ resize: "none", height: "250px" }}
              placeholder="Whats Your Think About it"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddBlog;
