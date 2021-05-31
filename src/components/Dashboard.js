import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ListGroup,
  ListGroupItem,
  Tab,
  Tabs,
  Container,
} from "react-bootstrap/";
import { checkAnswered } from "../utils/helpers";
import UnAnsweredQuestion from "./UnAnsweredQuestion";
import QuestionDisplay from "./QuestionDisplay";

const Dashboard = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((store) => store.questions);

  return (
    <Container className='my-5'>
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
                <ListGroupItem key={qid}>
                  <UnAnsweredQuestion key={qid} id={qid} user={authedUser} />
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
                <ListGroupItem key={qid}>
                  <QuestionDisplay id={qid} user={authedUser} />
                  <br />
                </ListGroupItem>
              ) : null
            )}
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default withRouter(Dashboard);
