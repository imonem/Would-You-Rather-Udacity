import React from "react";
import { getAuthorInfo, formatTime } from "../utils/helpers";
import { useSelector } from "react-redux";
import { Form, Col, Image, Row } from "react-bootstrap";

function QuestionDisplay(qid) {
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  //display user name and avatar
  const question = questions[qid.id];
  const [name, avatar] = getAuthorInfo(question, users);

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
          {/* <Button
            onClick={handleSubmit}
            value={submitButtonValue}
            title='Submit'
            type='Submit'
            className='my-3'
          >
            Answer
          </Button> */}
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

export default QuestionDisplay;
