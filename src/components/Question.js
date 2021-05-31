import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuthorInfo, formatTime } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Image, Row, Button } from "react-bootstrap";
import { handleAnswerQuestion } from "../actions/questions";

function Question(qid) {
  const { authedUser } = useSelector((state) => state);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  //history to get back to home after answer
  let history = useHistory();

  //display user name and avatar
  const question = questions[qid.id];
  const [name, avatar] = getAuthorInfo(question, users);

  //component state
  const [radioOne, setradioOne] = useState(false);
  const [radioTwo, setradioTwo] = useState(false);
  const [submitButtonValue, setsubmitButtonValue] = useState("");

  // radio selection and submit value
  const handleChangeValue = (e) => {
    switch (e.target.value) {
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
    if (e.target.value === false) {
      return alert("Please choose and answer or press back.");
    } else {
      const answerObject = { authedUser, qid: qid.id, answer };
      console.log(answerObject);
      dispatch(handleAnswerQuestion(answerObject));
    }

    history.push("/");
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
            id={`${qid.id}-1`}
            label={`${question.optionOne.text}`}
            value={"optionOne"}
            checked={radioOne}
            onChange={handleChangeValue}
            className='my-1'
          />
          <Form.Check
            type={"radio"}
            id={`${qid.id}-2`}
            label={`${question.optionTwo.text}`}
            value={"optionTwo"}
            checked={radioTwo}
            onChange={handleChangeValue}
            className='my-1'
          />
          <Button
            onClick={handleSubmit}
            value={submitButtonValue}
            block
            title='Submit'
            type='Submit'
            className='my-3'
          >
            Submit
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

export default Question;
