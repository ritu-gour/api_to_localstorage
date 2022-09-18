import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const naviagate = useNavigate();
  const Logout = () => {
    // localStorage.clear();
    naviagate("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>ritu</Navbar.Text>
          <Navbar.Text style={{ marginLeft: "10px" }}>
            <button className="btn btn-danger" onClick={Logout}>
              Logout
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
