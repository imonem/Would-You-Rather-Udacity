import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Form, Col, Button } from "react-bootstrap";
import { getUserNames, getAuthedUserId } from "../utils/helpers";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const { ...users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const usersKeys = Object.keys(users);

  const changeUser = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const authedUser = getAuthedUserId(users, user);
    console.log(authedUser);
    return dispatch({
      type: "SET_AUTHED_USER",
      payload: authedUser,
    });
  };

  console.log(`This is the selected username: ${user}`);

  return (
    <Container>
      <Form>
        <Form.Group controlId='login'>
          <Form.Row className='align-items-center'>
            <Col xs='auto' className='my-1'>
              <Form.Label className='mr-sm-2' srOnly>
                Select User
              </Form.Label>
              <Form.Control
                as='select'
                className='mr-sm-2'
                onChange={(e) => changeUser(e)}
              >
                <option value='0'>Choose...</option>
                {getUserNames(users, usersKeys).map((userName) => (
                  <option key={userName} value={userName}>
                    {userName}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col xs='auto' className='my-1'>
              <Form.Check type='checkbox' label='Remember me' custom />
            </Col>
            <Col xs='auto' className='my-1'>
              <Button type='submit' onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LoginPage;
