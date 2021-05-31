import React from "react";
import Container from "react-bootstrap/Container";
import Question from "./Question";
import { useParams } from "react-router-dom";

function QuestionPage() {
  let { id } = useParams();
  // const { authedUser, questions, users } = useSelector((state) => state);
  console.log(`qid from QuestionPage: `, id);
  return (
    <Container className='my-5'>
      <Question id={id} />
    </Container>
  );
}

export default QuestionPage;
