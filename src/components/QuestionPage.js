import React from "react";
import Container from "react-bootstrap/Container";
import Question from "./Question";
import QuestionDetails from "./QuestionDetails";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkAnswered } from "../utils/helpers";

function QuestionPage() {
  let { id } = useParams();
  const { authedUser, questions } = useSelector((state) => state);
  console.log(`qid from QuestionPage: `, id);

  const checkIsIdInvalid = (idq) => {
    if (Object.keys(questions).includes(idq) === true) {
      return true;
    }
    return false;
  };

  return (
    <Container className='my-5'>
      {checkIsIdInvalid(id) ? (
        checkAnswered(questions[id], authedUser.id) ? (
          <QuestionDetails id={id} />
        ) : (
          <Question id={id} />
        )
      ) : (
        <Redirect to='/404' />
      )}
    </Container>
  );
}

export default QuestionPage;
