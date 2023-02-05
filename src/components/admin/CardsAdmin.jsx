import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../../assets/images/bgtest.jpeg";

import * as AiIcons from "react-icons/ai";

const CardsAdmin = () => {
  return (
    <>
      <Container fluid className="py-4">
        <Row className="d-flex flex-row justifty-content-center align-item-center">
          <Col sm={4} className="my-2">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <div className="d-flex justify-content-end">
                  <Button variant="success" className="mx-2">
                    <AiIcons.AiFillEdit />
                  </Button>
                  <Button variant="danger">
                    <AiIcons.AiFillDelete />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardsAdmin;
