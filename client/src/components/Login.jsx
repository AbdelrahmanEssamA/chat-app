import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Login = (props) => {
  const idRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    props.onIdSubmit(idRef.current.value);
  }
  function createNewId() {
    props.onIdSubmit(uuidv4());
  }
  return (
    <Container
      className="d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <img
        src="https://play-lh.googleusercontent.com/BfJ4II9BaW3rcNttkr5z17EWv6G2Wx7LGojUQ6PrmIcWgkO1bhnphxgaVuA3Ee4gm1k"
        alt=""
        className="h-25 m-3"
      />
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="my-3" variant="success">
          Login
        </Button>
        <Button variant="light" className="mx-2" onClick={createNewId}>
          Create A New id
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
