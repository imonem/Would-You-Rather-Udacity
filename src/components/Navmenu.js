import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg='light' expand='lg'>
      <Nav>
        <NavLink to='/' exact activeClassName='active'>
          Dashboard
        </NavLink>
        <NavLink to='/new' activeClassName='active'>
          New Question
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
