import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import Question from "./Question";

function QuestionPage(qid) {
  const { id } = qid.match.params;
  const { authedUser, questions, users } = useSelector((state) => state);

  return (
    <Container className='my-5'>
      <Question id={id} />
    </Container>
  );
}

export default QuestionPage;
