import React from "react";
import { getAuthorInfo, formatTime } from "../utils/helpers";
import { useSelector } from "react-redux";
import { Form, Col, Image, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function AnsweredQuestion(qid) {
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  //redirect to Questions page
  let history = useHistory();

  //display user name and avatar
  const question = questions[qid.id];
  const [name, avatar] = getAuthorInfo(question, users);

  //route to question id
  const handleSubmit = (e) => {
    history.push(`/question/${qid.id}`);
  };

  return (
    <div className='container'>
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
        <Form.Group>
          {/**todo: handle infographics display */}
          <Button
            onClick={handleSubmit}
            title='View details'
            type='Submit'
            className='my-3'
          >
            View Poll Results
          </Button>
        </Form.Group>
      </Col>
      <Col>
        <div>
          <span className='card-subtitle mb-2 text-muted sm'>{` Asked on ${formatTime(
            question.timestamp
          )}`}</span>
        </div>
      </Col>
    </div>
  );
}

export default AnsweredQuestion;
