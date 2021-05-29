import React from "react";
import { getAuthorInfo, formatTime } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { Col, Image, Row } from "react-bootstrap";

function Question(qid) {
  // const authedUser = useSelector((state) => state.authedUser);
  const { ...users } = useSelector((state) => state.users);
  const { ...questions } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const question = questions[qid.id];
  //   console.log(`this is qid.id: ${qid.id}, and this is the qid: ${qid}`);
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
      <Col>
        <div>{`Option one: ${question.optionOne.text}`}</div>
        <div>{`votes: ${question.optionOne.votes.length}`}</div>
        <div>{`Option two: ${question.optionTwo.text}`}</div>
        <div>{`votes: ${question.optionTwo.votes.length}`}</div>
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
