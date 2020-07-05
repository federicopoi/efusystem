import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

import { withRouter, NavLink as RRNavLink } from "react-router-dom";
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="font-weight-bold">EFU System</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/" activeClassName="active" tag={RRNavLink}>
                Dashboard
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/tarjetas" activeClassName="active" tag={RRNavLink}>
                Mis Tarjetas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/buscar" activeClassName="active" tag={RRNavLink}>
                Buscar tarjeta
              </NavLink>
            </NavItem>
          </Nav>
          {localStorage.token ? (
            <Nav className="ml-auto" navbar>
              <NavItem onClick={props.logout}>
                <NavLink
                  to="/"
                  onClick={props.logout}
                  activeClassName="active"
                  tag={RRNavLink}
                >
                  Salir
                </NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/login" activeClassName="active" tag={RRNavLink}>
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(withRouter(NavBar));
