import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import '../styles/NavbarComp.css';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="my-navbar">
      <Container>
        <Navbar.Brand className="nav-logo home-title">GamesX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav className="ms-auto text-uppercase text-center">
            <Nav.Link href="/">Inicio</Nav.Link> 
            <Nav.Link eventKey={1} href="/misDevoluciones">
              Mis Devoluciones
            </Nav.Link>
            <Nav.Link eventKey={1} href="/misPedidos">
              Mis Pedidos
            </Nav.Link>
            <Nav.Link eventKey={2} href="/category/:id">
              Catalogo
            </Nav.Link>
            <Nav.Link eventKey={2} href="/admin">
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;