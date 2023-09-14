import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="secondary" variant="dark" className="mt-2 mb-2 rounded">
      <div className="container">
        <Navbar.Brand href="/">BooksShop</Navbar.Brand>
        <Nav className="me-auto row justify-content-end">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavBar;