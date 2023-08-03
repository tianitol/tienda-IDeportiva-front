import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Tienda Deportiva 🎿</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Ropa</Nav.Link>
                <Nav.Link href="#pricing">Calzado</Nav.Link>
                <Nav.Link href="#pricing">Accesorios</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
  };
  
  export default NavBar;
  
