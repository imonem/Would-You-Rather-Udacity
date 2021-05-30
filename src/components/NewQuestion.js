import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

function NewQuestion() {
  const authedUser = useSelector((state) => state.authedUser);
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const text = e.target.value;
    // console.log(text, e.target.id);
    // console.log(optionOneText);
    // console.log(optionTwoText);
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
    e.preventDefault();
    const text = { optionOneText, optionTwoText };

    dispatch(handleAddQuestion(text));

    setOptionOneText("");
    setOptionTwoText("");
  };
  return (
    <Container className='center'>
      {/*todo: Redirect to Dashboard on submission */}
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
          <Button
            as='input'
            type='submit'
            value='Submit'
            size='lg'
            className='my-3'
            block
            onClick={handleSubmit}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default NewQuestion;
