import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, ListGroupItem, Tab, Tabs, Button } from "react-bootstrap/";
import { checkAnswered } from "../utils/helpers";
import Question from "./Question";

const Dashboard = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const { ...questions } = useSelector((store) => store.questions);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log(authedUser);
    return dispatch({
      type: "SET_AUTHED_USER",
      payload: null,
    });
  };

  return (
    <div className='container'>
      <h1>Home</h1>
      <Button onClick={(e) => handleLogout(e)}>Logout</Button>
      <Tabs
        defaultActiveKey='answered'
        className='nav nav-tabs justify-content-center'
        id='myTab'
        role='tablist'
      >
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
      </Tabs>
    </div>
  );
};

export default Dashboard;
