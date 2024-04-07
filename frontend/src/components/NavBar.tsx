import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bag, PersonCircle } from 'react-bootstrap-icons';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/">The B E A in the W</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/account" title="Account"><PersonCircle /></Nav.Link>
          <Nav.Link as={Link} to="/cart" title="Cart"><Bag /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;