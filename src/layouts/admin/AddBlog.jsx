import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const AddBlog = () => {
  return (
    <div className="d-flex w-100 justify-content-center align-item-center py-5">
      <Container className="border border-2 rounded rounded-2 p-5 mx-2">
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Tittle Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
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
        </Form>
        <Button variant="primary">Save</Button>
      </Container>
    </div>
  );
};

export default AddBlog;
