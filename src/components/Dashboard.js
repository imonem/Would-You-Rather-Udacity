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
import UnAnsweredQuestion from "./UnAnsweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";

const Dashboard = () => {
  const authedUser = useSelector((state) => state.authedUser); //Note: spreading of authedUser is important, at <Login /> we iterated using Object.values
  const questions = useSelector((state) => state.questions);

  //Note: answered or not, it only matters to the authedUser, and not objects in children

  const handleUnAnsweredQuestions = (questionsObject, id) => {
    const handledQuestions = Object.values(questionsObject)
      .sort((a, b) => b.timestamp - a.timestamp)
      .filter(
        (q) =>
          !q.optionOne.votes.includes(id) && !q.optionTwo.votes.includes(id)
      );
    return handledQuestions;
  };

  const handleAnsweredQuestions = (questionsObject, id) => {
    const handledQuestions = Object.values(questionsObject)
      .sort((a, b) => b.timestamp - a.timestamp)
      .filter(
        (q) => q.optionOne.votes.includes(id) || q.optionTwo.votes.includes(id)
      );
    return handledQuestions;
  };

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
            {handleUnAnsweredQuestions(questions, authedUser.id).map((q) => (
              <ListGroupItem key={q.id}>
                <UnAnsweredQuestion id={q.id} user={authedUser.id} />
                <br />
              </ListGroupItem>
            ))}
          </ListGroup>
        </Tab>
        <Tab eventKey='answered' title='Answered'>
          <br />
          <ListGroup>
            {handleAnsweredQuestions(questions, authedUser.id).map((q) => (
              <ListGroupItem key={q.id}>
                <AnsweredQuestion id={q.id} user={authedUser.id} />
                <br />
              </ListGroupItem>
            ))}
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default withRouter(Dashboard);
