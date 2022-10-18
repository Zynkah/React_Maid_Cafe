import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../app/assets/img/logo.jpg";
import CartForm from "../features/cart/CartForm";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={Logo} alt="nucamp logo" className="float-start" />
        <h1 className="mt-1">Zynkah's Maid Cafe</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/menu">
              <i className="fa fa-coffee fa-lg" /> Menu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/maids">
              <i className="fa fa-female fa-lg" /> Maids
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact
            </NavLink>
          </NavItem>
        </Nav>
        <CartForm />
      </Collapse>
    </Navbar>
  );
};

export default Header;
