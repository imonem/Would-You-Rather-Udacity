import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Form, Col, Button, Card } from "react-bootstrap";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const usersKeys = Object.keys(users);
  console.log(usersKeys);

  const changeUser = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    if (user === null) {
      alert("Please select a user to continue");
    } else {
      const [authedUser] = Object.values(users).filter((u) => u.id === user); //Note: Destructure to keep it in Object form
      console.log(authedUser);
      return dispatch({
        type: "SET_AUTHED_USER",
        payload: authedUser,
      });
    }
  };

  console.log(`This is the selected username: ${user}`);

  return (
    <Container className='align-items-center'>
      <Form>
        <Container className='text-center mt-5 mb-5'>
          <Card>
            <h2>Welcome to</h2>
            <h1>Would You Rather Game</h1>
          </Card>
          <Card>
            <Form.Group controlId='login'>
              <Form.Row className='align-items-center'>
                <Col md={{ span: 5, offset: 3 }} className='my-1'>
                  <Form.Label className='mr-sm-2' srOnly>
                    Select User
                  </Form.Label>
                  <Form.Control
                    as='select'
                    className='mr-sm-2'
                    onChange={(e) => changeUser(e)}
                  >
                    <option value='0'>Choose a user ...</option>
                    {Object.values(users).map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </Form.Control>
                  <Button
                    block
                    className='my-4'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Col>
              </Form.Row>
            </Form.Group>
          </Card>
        </Container>
      </Form>
    </Container>
  );
};

export default LoginPage;
