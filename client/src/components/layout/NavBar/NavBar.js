import Navbar from 'react-bootstrap/NavBar';
import styles from './NavBar.module.scss';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar>
      <div className="container">
        <Navbar.Brand href="/">BooksShop</Navbar.Brand>
        <Nav>
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