import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Figure, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { MyaccBlog } from "../../features/AuthSlice";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDesc] = useState("");
  const [prev, setPrev] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { isError } = useSelector((state) => state.authLogin);

  useEffect(() => {
    dispatch(MyaccBlog());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/proBlogAdmin/${params.id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDesc(response.data.description);
        setImg(response.data.img);
        setPrev(response.data.url);
      });
  }, [params]);

  // useEffect(() => {
  //   const getPostById = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/proBlogAdmin/${params.id}`
  //       );
  //       setTitle(response.data.title);
  //       setDesc(response.data.description);
  //       setImg(response.data.img);
  //       setPrev(response.data.url);
  //     } catch (error) {
  //       if (error.response) {
  //         setMsg(error.response.data.msg);
  //       }
  //     }
  //   };
  //   getPostById();
  // }, [params]);

  const loadImage = (e) => {
    const images = e.target.files[0];
    if (!images.name.match(/\.(jpg|jpeg|png)$/)) {
      return false;
    }
    setImg(images);
    setPrev(URL.createObjectURL(images));
  };

  const updatePost = async (e) => {
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
      const response = await axios.patch(
        `http://localhost:5000/proBlogAdmin/${params.id}`,
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
        console.log(error);
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Container className="border border-2 rounded rounded-2 p-5 mx-2">
      <Form onSubmit={updatePost}>
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
          <Form.Label>Change Image</Form.Label>
          <Form.Control type="file" onChange={loadImage} />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Tittle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            required
            onChange={(e) => setDesc(e.target.value)}
            rows={3}
            style={{ resize: "none", height: "250px" }}
            placeholder="Whats Your Think About it"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditBlog;
