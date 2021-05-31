import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { Button, Image, Col } from "react-bootstrap/";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useHistory } from "react-router-dom";
import { getAuthedUserAvatar, getAuthedUserName } from "../utils/helpers";

function Navigation() {
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    return dispatch({
      type: "SET_AUTHED_USER",
      payload: null,
    });
  };

  return (
    <Navbar bg='light' expand='lg' className='my-2 justify-content-between'>
      <Nav className='mr-auto'>
        <NavLink to='/' exact activeClassName='active' className='mr-sm-2'>
          Dashboard
        </NavLink>
        <NavLink to='/new' activeClassName='active' className='mr-sm-2'>
          New Question
        </NavLink>
        <NavLink to='/leaderboard' activeClassName='active' className='mr-sm-2'>
          Leaderboard
        </NavLink>
      </Nav>
      <Col md={2}>
        <Image
          src={getAuthedUserAvatar(authedUser, users)}
          roundedCircle
          style={{ maxWidth: `50px` }}
        />
        <p>{getAuthedUserName(users, authedUser)}</p>
      </Col>
      <Button onClick={(e) => handleLogout(e)}>
        <Link to='/' style={{ color: `white` }}>
          Logout
        </Link>
      </Button>
    </Navbar>
  );
}

export default Navigation;
