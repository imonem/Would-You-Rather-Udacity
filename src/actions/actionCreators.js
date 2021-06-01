//import action types
import * as actions from "./actionTypes";

//Receive questions on server
export const receiveQuestions = (questions) => ({
  type: actions.RECEIVE_QUESTIONS,
  questions,
});

//action creator for ADD_QUESTION
export const addQuestion = (question) => ({
  type: actions.ADD_QUESTION,
  question,
});

//action creator for ANSWER_QUESTION
export const answerQuestion = ({ authedUser, qid, answer }) => ({
  type: actions.ANSWER_QUESTION,
  authedUser,
  qid,
  answer,
});
