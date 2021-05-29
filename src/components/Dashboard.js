import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, ListGroupItem, Tab, Tabs, Button } from "react-bootstrap/";
import {
  checkAnswered,
  getAuthedUserId,
  getAuthedUserName,
} from "../utils/helpers";
import Question from "./Question";
import NewQuestion from "./NewQuestion";

const Dashboard = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const { ...questions } = useSelector((store) => store.questions);
  const { ...users } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const authedUserObject = getAuthedUserId(users, authedUser);

  const handleLogout = (e) => {
    e.preventDefault();
    console.log(authedUser);
    return dispatch({
      type: "SET_AUTHED_USER",
      payload: null,
    });
  };

  console.log(authedUserObject);

  return (
    <div className='container'>
      <h1>Home</h1>
      {/* todo: Implement in the navbar */}
      <p>{getAuthedUserName(users, authedUser)}</p>
      <Button onClick={(e) => handleLogout(e)}>Logout</Button>
      <Button href='/new-question'>New Question</Button>
      {/* todo: Implement in the navbar */}
      <Tabs
        defaultActiveKey='unanswered'
        className='nav nav-tabs justify-content-center'
        id='myTab'
        role='tablist'
      >
        <Tab eventKey='unanswered' title='Unanswered'>
          <br />
          <ListGroup>
            {Object.keys(questions).map((qid) =>
              checkAnswered(questions[qid], authedUser) ? null : (
                <ListGroupItem action key={qid}>
                  <Question id={qid} />
                  <br />
                </ListGroupItem>
              )
            )}
          </ListGroup>
        </Tab>
        <Tab eventKey='answered' title='Answered'>
          <br />
          <ListGroup>
            {Object.keys(questions).map((qid) =>
              checkAnswered(questions[qid], authedUser) ? (
                <ListGroupItem action key={qid}>
                  <Question id={qid} />
                  <br />
                </ListGroupItem>
              ) : null
            )}
          </ListGroup>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
