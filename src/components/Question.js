import React, { useState } from "react";
import { getAuthorInfo, formatTime } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Image, Row, Button } from "react-bootstrap";
import { handleAnswerQuestion } from "../actions/questions";

function Question(qid) {
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  //display user name and avatar
  const question = questions[qid.id];
  const [name, avatar] = getAuthorInfo(question, users);

  //component state
  const [radioOne, setradioOne] = useState(false);
  const [radioTwo, setradioTwo] = useState(false);
  const [submitButtonValue, setsubmitButtonValue] = useState("");

  // radio selection and submit value
  const handleChangeValue = (e) => {
    switch (e.target.id) {
      case "optionOne":
        setradioOne(true);
        setsubmitButtonValue("optionOne");
        return setradioTwo(false);
      case "optionTwo":
        setradioTwo(true);
        setsubmitButtonValue("optionTwo");
        return setradioOne(false);
      default:
        setradioOne(false);
        setradioTwo(false);
        setsubmitButtonValue("");
        return;
    }
  };

  //dispatch action
  const handleSubmit = (e) => {
    const answer = e.target.value;
    const answerObject = { authedUser, qid: qid.id, answer };
    console.log(answerObject);

    dispatch(handleAnswerQuestion(answerObject));
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
          <Form.Check
            type={"radio"}
            id={"optionOne"}
            label={`${question.optionOne.text}`}
            value={"optionOne"}
            checked={radioOne}
            onChange={handleChangeValue}
          />
          <Form.Check
            type={"radio"}
            id={"optionTwo"}
            label={`${question.optionTwo.text}`}
            value={"optionTwo"}
            checked={radioTwo}
            onChange={handleChangeValue}
          />
          <Button onClick={handleSubmit} value={submitButtonValue} block>
            Submit Vote
          </Button>
        </Form.Group>
      </Col>
      <Col>
        <div>
          <span className='card-subtitle mb-2 text-muted'>{` Asked on ${formatTime(
            question.timestamp
          )}`}</span>
        </div>
      </Col>
    </div>
  );
}

export default Question;
