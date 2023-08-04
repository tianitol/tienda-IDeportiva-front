import "./navbar.css";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

const NavBar = () => {
  const logout = () => {
    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3000/api/auth/logout")
      .then((response) => {
        console.log(response.data);

        window.location.href = "/login";
      })
      .catch((e) => {
        console.log(e);
        window.location.href = "/";
      });
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ width: "100%" }}>
        <Container>
          <Navbar.Brand>Tienda Deportiva 🎿</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="navbar-link" to={"/"}>
              Home
            </Link>
            <Link className="navbar-link" to={"/clothes"}>
              Ropa
            </Link>
            <Link className="navbar-link" to={"/shoes"}>
              Calzado
            </Link>
            <Link className="navbar-link" to={"/accessories"}>
              Accesorios
            </Link>

            {!document.cookie.includes("tokenUsuario") ? (
              <div style={{ display: "flex", marginLeft: "3em" }}>
                <Link
                  className="navbar-link"
                  style={{
                    color: "lightgreen",
                    borderRadius: "0.5em",
                    border: "solid 1px lightgreen",
                    padding: "0.2em",
                  }}
                  to={"/login"}
                >
                  Ingresar
                </Link>
                <Link
                  className="navbar-link"
                  style={{
                    color: "lightblue",
                    borderRadius: "0.5em",
                    border: "solid 1px lightblue",
                    padding: "0.2em",
                  }}
                  to={"/register"}
                >
                  Registrarse
                </Link>
              </div>
            ) : (
              <div style={{ display: "flex", marginLeft: "3em" }}>
                <Link
                  className="navbar-link"
                  style={{
                    color: "pink",
                    borderRadius: "0.5em",
                    border: "solid 1px pink",
                    padding: "0.2em",
                  }}
                  onClick={() => {
                    logout();
                  }}
                >
                  Cerrar Sesión
                </Link>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
