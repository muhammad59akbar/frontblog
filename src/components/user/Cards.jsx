import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Cards = () => {
  const [getBlogUser, setgetBlogUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog-app-navy-one.vercel.app/proBlog")
      .then((response) => {
        setgetBlogUser(response.data);
      });
  }, []);

  return (
    <>
      <Container fluid>
        <h2 className="text-center mt-5">Welcome My Blog</h2>
        <p className="text-center">Happy Reading</p>
        <Row className="d-flex flex-row justifty-content-center align-item-center">
          {getBlogUser.map((res, idx) => {
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
                          to={`/Blog/View_Post/${res.uuid}`}
                          className="mx-1"
                        >
                          Read More
                        </Link>
                      </Card.Text>
                    ) : (
                      <Card.Text>{res.description}</Card.Text>
                    )}

                    <Link
                      to={`/Blog/View_Post/${res.uuid}`}
                      className="btn btn-primary"
                    >
                      View More
                    </Link>
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

export default Cards;
