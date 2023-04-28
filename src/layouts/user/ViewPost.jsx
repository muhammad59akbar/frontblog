import React, { useEffect, useState } from "react";
import { Container, Figure, Button } from "react-bootstrap";
import Navbaruser from "../../components/user/Navbaruser";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ViewPost = () => {
  const [DetailPost, setDetailPost] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/proBlog/${params.id}`).then((response) => {
      setDetailPost(response.data);
      setUser(response.data.user_blog);
    });
  }, [params]);

  return (
    <>
      <Navbaruser />

      <Container className="mt-5 p-5 w-100 d-flex flex-column">
        <h2 className="text-center my-2">{DetailPost.title}</h2>
        <Figure className="w-100">
          <Figure.Image
            style={{ width: "100%", height: "500px" }}
            alt={DetailPost.img}
            src={DetailPost.url}
            className="my-2"
          />
        </Figure>

        <p style={{ whiteSpace: "pre-line" }}>{DetailPost.description}</p>

        <span className="mt-2">Authors : {user.first_name}</span>

        <Button
          variant="primary"
          className="mt-4"
          onClick={() => navigate("/Blog")}
        >
          Back To Blog
        </Button>
      </Container>
    </>
  );
};

export default ViewPost;
