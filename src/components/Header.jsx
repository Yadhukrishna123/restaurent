import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
  import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as= {Link} to="/">RestAurent</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as= {Link} to="/">Home</Nav.Link>
            <Nav.Link as= {Link} to="/About">About</Nav.Link>
            <Nav.Link as= {Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as= {Link} to="/Add">Add</Nav.Link>
            <Nav.Link as= {Link} to="/Register">Register</Nav.Link>
            <Nav.Link as= {Link} to="/Login">Login</Nav.Link>
            <Nav.Link as= {Link} to="/Users">Users</Nav.Link>
            
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;