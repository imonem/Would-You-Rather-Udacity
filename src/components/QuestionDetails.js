import React from "react";
import { useHistory } from "react-router-dom";
import { getAuthorInfo, formatTime, countVotes } from "../utils/helpers";
import { useSelector } from "react-redux";
import { Form, Col, Image, Row, Button, Container } from "react-bootstrap";

function Question(qid) {
  const { authedUser, users } = useSelector((state) => state);
  const questions = useSelector((state) => state.questions);

  //history to get back to home after viewing details
  let history = useHistory();

  //display user name and avatar
  const question = questions[qid.id];
  const [name, avatar] = getAuthorInfo(question, users);

  const [
    votesOne,
    votesTwo,
    percentageVotesOne,
    percentageVotesTwo,
    authedUserVote,
  ] = countVotes(questions[qid.id], authedUser.id, users);

  const handleClick = (e) => {
    history.push("/");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Image
            src={avatar}
            alt={`Avatar of ${name}`}
            rounded
            style={{ maxWidth: 100 }}
          />
          <span> {name} asks would you rather ...</span>
        </Col>
      </Row>
      <Col className='align-content-start'>
        {/**todo: Better styling */}
        <Form.Group>
          <h3>{question.optionOne.text}</h3>
          <br />
          <h2>{votesOne} votes</h2>
          <h4>
            Percentage users voted for this option{" "}
            {Math.round(percentageVotesOne)}
          </h4>
          <hr />
          <h3>{question.optionTwo.text}</h3>
          <h2>{votesTwo} votes</h2>
          <h4>
            Percentage users voted for this option{" "}
            {Math.round(percentageVotesTwo)}
          </h4>
          <br />
          <h4>{authedUserVote}</h4>
          <br />
          <Button onClick={handleClick}>Get back</Button>
        </Form.Group>
      </Col>
      <Col>
        <div>
          <span className='card-subtitle mb-2 text-muted sm'>{` Asked on ${formatTime(
            question.timestamp
          )}`}</span>
        </div>
      </Col>
    </Container>
  );
}

export default Question;
