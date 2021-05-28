import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Question(qid) {
  const authedUser = useSelector((state) => state.authedUser);
  const { ...users } = useSelector((state) => state.users);
  const { ...questions } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const question = questions[qid.id];
  const user = users[authedUser];

  console.log(question, user);

  return (
    <div className='tweet'>
      <div>Author: {question.author}</div>
      <div className='tweet-info'>Would You Rather ...</div>
      <div>{`Option one: ${question.optionOne.text} votes: ${question.optionOne.votes.length}`}</div>
      <div>{`Option two: ${question.optionTwo.text} votes: ${question.optionTwo.votes.length}`}</div>
    </div>
  );
}

export default Question;

{
  /* <img
src={user.avatarURL}
alt={`Avatar of ${user.name}`}
className='avatar'
/> */
}
