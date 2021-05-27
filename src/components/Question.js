import React from "react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

function Question(qid) {
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  console.log(users, questions);

  return (
    <Fragment>
      <h1>{`${qid.id}`}</h1>
    </Fragment>
  );
}

export default Question;
