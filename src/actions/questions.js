//import API functions to save new question and new question answers
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

//Action creator to update the store for handleGetQuestions
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

//action creator for ADD_QUESTION
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

//Asynchronous function to handle adding new question to Store
export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    console.log(authedUser, question);
    dispatch(showLoading());
    return _saveQuestion({
      ...question,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
