import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

function NewQuestion({ users }) {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const dispatch = useDispatch();

  //history to get back to home after answer
  let history = useHistory();

  //checks input of options text and enables/disables submit
  const handleChange = (e) => {
    const text = e.target.value;

    switch (e.target.id) {
      case "optionOne":
        return setOptionOneText(text);
      case "optionTwo":
        return setOptionTwoText(text);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    const text = { optionOneText, optionTwoText };
    dispatch(handleAddQuestion(text));
    setOptionOneText("");
    setOptionTwoText("");
    history.push("/");
  };

  return (
    <Container className='center'>
      <h3 className='my-5'>Ask a new question</h3>
      <h4>Would you rather ...</h4>
      <Form>
        <Form.Group>
          <Form.Label>Option One</Form.Label>
          <Form.Control
            id='optionOne'
            placeholder='Enter option one'
            value={optionOneText.text}
            className='my-1'
            onChange={handleChange}
          />
          <Form.Label>Option Two</Form.Label>
          <Form.Control
            id='optionTwo'
            placeholder='Enter option two'
            value={optionTwoText.text}
            className='my-1'
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          as='input'
          type='submit'
          value='Submit'
          size='lg'
          className='my-3'
          block
          disabled={!(optionOneText && optionTwoText)}
          onClick={handleSubmit}
        />
      </Form>
    </Container>
  );
}

export default NewQuestion;
