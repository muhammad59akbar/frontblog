import React from "react";
import { Button, Container, Figure, Form } from "react-bootstrap";
import test from "../../assets/images/bgtest.jpeg";

const EditBlog = () => {
  return (
    <Container className="border border-2 rounded rounded-2 p-5 mx-2">
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Change Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Figure>
          <Figure.Image
            style={{ width: "100%", height: "auto" }}
            alt="171x180"
            src={test}
          />
        </Figure>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Tittle</Form.Label>
          <Form.Control type="text" placeholder="Tittle" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            style={{ resize: "none", height: "250px" }}
            placeholder="Whats Your Think About it"
          />
        </Form.Group>
        <Button variant="primary">Save</Button>
      </Form>
    </Container>
  );
};

export default EditBlog;
