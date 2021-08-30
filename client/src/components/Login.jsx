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
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88e30824-3c9a-4957-b6ab-394cb783aa20/dd2la2q-ed7adacc-7dc7-4d3e-846f-20ae14c90309.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4ZTMwODI0LTNjOWEtNDk1Ny1iNmFiLTM5NGNiNzgzYWEyMFwvZGQybGEycS1lZDdhZGFjYy03ZGM3LTRkM2UtODQ2Zi0yMGFlMTRjOTAzMDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FmC1yM3qyWY269jXCkNV81ygPrra3WrlUVrXCpq_2_4"
        alt=""
        className="h-100 m-3"
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
