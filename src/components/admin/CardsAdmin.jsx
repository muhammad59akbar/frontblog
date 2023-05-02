import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink, Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

const CardsAdmin = () => {
  const [Blog, setBlog] = useState([]);

  const getAllBlog = async () => {
    axios
      .get("https://blog-app-navy-one.vercel.app/proBlogAdmin")
      .then(({ data }) => {
        setBlog(data);
      });
  };
  useEffect(() => {
    getAllBlog();
  }, []);

  const deletePost = async (postID) => {
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
      .delete(`https://blog-app-tan-six.vercel.app/proBlogAdmin/${postID}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        getAllBlog();
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
      <Container fluid className="py-4">
        <Row className="d-flex flex-row justifty-content-center align-item-center">
          {Blog.map((res, idx) => {
            return (
              <Col sm={4} className="my-2" key={idx}>
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={res.url}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{res.title}</Card.Title>
                    {res.description.length > 30 ? (
                      <Card.Text>
                        {`${res.description.substring(0, 30)}...`}
                        <Link
                          to={`/mdproadmin/ViewBlog/Edit/${res.uuid}`}
                          className="mx-1"
                        >
                          Read More
                        </Link>
                      </Card.Text>
                    ) : (
                      <Card.Text>{res.description}</Card.Text>
                    )}

                    <span className="my-2">
                      Author by : {res.user_blog.first_name}
                    </span>

                    <div className="d-flex justify-content-end my-2">
                      <NavLink
                        to={`/mdproadmin/ViewBlog/Edit/${res.uuid}`}
                        className="btn btn-success mx-2"
                      >
                        <AiIcons.AiFillEdit />
                      </NavLink>
                      <Button
                        variant="danger"
                        onClick={() => deletePost(res.uuid)}
                      >
                        <AiIcons.AiFillDelete />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardsAdmin;
