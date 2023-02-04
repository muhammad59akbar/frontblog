import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Caraousel = () => {
  const navigate = useNavigate();

  return (
    <div className="mycaraousel w-100">
      <Container>
        <Row>
          <Col className=" text-center text-white">
            <h1 className="fs-1">My Blog aplication</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
              sunt.
            </p>
            <Button variant="primary" onClick={() => navigate("/Blog")}>
              View Blog
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Caraousel;
