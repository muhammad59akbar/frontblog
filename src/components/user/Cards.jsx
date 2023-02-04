import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../../assets/images/bgtest.jpeg";

const Cards = () => {
  return (
    <>
      <Container fluid>
        <h2 className="text-center mt-5">Welcome My Blog</h2>
        <p className="text-center">Happy Reading</p>
        <Row className="d-flex flex-row justifty-content-center align-item-center">
          <Col sm={3} className="my-2">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3} className="my-2">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3} className="my-2">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="my-2">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="my-2">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="my-2">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
