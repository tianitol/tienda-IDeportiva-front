import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{
          width: "100%",
        }}
      >
        <Container>
          <Nav
            className="me-auto"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Link className="navbar-link" to="/somos">
              Quiénes somos
            </Link>
            <Link className="navbar-link" to="/contact">
              Contacto
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
