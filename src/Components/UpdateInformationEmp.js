import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Button,
  Card,
  Form,
  Image,
} from "react-bootstrap";

function UpdateInformationEmp() {
  const { id } = useParams();
  const naviagate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const getDataForm = () => {
    const data = localStorage.getItem("records");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [empInfo] = useState(getDataForm());

  const [singleEmpInfo, setSingleEmpInfo] = useState(
    empInfo.find((x) => x.login === id)
  );

  const updateForm = (event) => {
    event.preventDefault();
    const dd = Object.assign(singleEmpInfo, { firstName, lastName });
    setSingleEmpInfo(dd);
    const ddx = Object.assign(empInfo, { dd });
    localStorage.setItem("records", JSON.stringify(ddx));
    naviagate("/dashboard");
  };

  return (
    <Container>
      <Row style={{ marginTop: "150px" }}>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card>
            <Card.Header as="h5">Update</Card.Header>
            <Card.Body>
              <Image
              
                
             
                className="mx-auto d-block"
                src={singleEmpInfo.avatar_url}
                rounded
              />
              <Form onSubmit={updateForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={singleEmpInfo.firstName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={singleEmpInfo.lastName}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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

export default UpdateInformationEmp;
