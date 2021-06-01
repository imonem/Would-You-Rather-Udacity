//import action types
import * as actions from "./actionTypes";

//Action creator to update the store for handleUserLoginData
export const receiveUsers = (users) => ({
  type: actions.RECEIVE_USERS,
  users,
});

export const userAnswerQuestion = (authedUser, qid, answer) => ({
  type: actions.ANSWER_QUESTION,
  authedUser,
  qid,
  answer,
});
