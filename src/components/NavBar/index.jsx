import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Tienda Deportiva 🎿</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='navbar-link' to={'/'}>
              Home
            </Link>
            <Link className='navbar-link' to={'/clothes'}>
              Ropa
            </Link>
            <Link className='navbar-link' to={'/shoes'}>
              Calzado
            </Link>
            <Link className='navbar-link' to={'/accessories'}>
              Accesorios
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

