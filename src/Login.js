import { useEffect } from "react";
import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Alert,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 

  const navigate = useNavigate();

  useEffect (() => {
    setUsername("");
    setPassword("");
    setError("");

  },[]);

  
  const handleForm = (event) => {
    event.preventDefault();
    if (username === "" && password === "") {
      return setError("Please enter your username & password");
    }
    if (username !== "ritu" && password !== "ritu@123") {
      return setError("Please enter your correct username & password");
    }
    if (username === "ritu" && password === "ritu@123") {
      setError("");
      return navigate("/dashboard");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <Container>
      <Row style={{ marginTop: "150px" }}>
        <Col sm={4}></Col>
        <Col sm={4}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card>
            <Card.Header as="h5">Login</Card.Header>
            <Card.Body>
              <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ritu"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="ritu@123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Login;
