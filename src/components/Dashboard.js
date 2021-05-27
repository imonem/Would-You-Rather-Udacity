import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Question from "./Question";

const Dashboard = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((store) => store.questions);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <ul>
        {Object.keys(questions).map((qid) => (
          <li key={qid}>
            <Question id={qid} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Dashboard;
