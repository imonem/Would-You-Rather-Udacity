import React from "react";
import Container from "react-bootstrap/Container";
import Question from "./Question";
import QuestionDetails from "./QuestionDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkAnswered } from "../utils/helpers";

function QuestionPage() {
  let { id } = useParams();
  const { authedUser, questions } = useSelector((state) => state);
  console.log(`qid from QuestionPage: `, id);

  return (
    <Container className='my-5'>
      {checkAnswered(questions[id], authedUser.id) ? (
        <QuestionDetails id={id} />
      ) : (
        <Question id={id} />
      )}
    </Container>
  );
}

export default QuestionPage;
