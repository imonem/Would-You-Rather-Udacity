//import action creators
import { addQuestion, answerQuestion } from "./actionCreators";
import { userAnswerQuestion, userAddQuestion } from "./users";

//import API functions to save new question and new question answers
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

//Asynchronous function to handle answering a question to Store
export const handleAnswerQuestion = (qAnswer) => {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(answerQuestion(qAnswer));
    return _saveQuestionAnswer(qAnswer)
      .then(dispatch(hideLoading()))
      .catch((e) => {
        console.warn("Error in handleAnswerQuestion: ", e);
      });
  };
};

//Users update, when authedUser answer a question
export const handleUserAnswerQuestion = (qAnswer) => {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(userAnswerQuestion(qAnswer));
    return _saveQuestionAnswer(qAnswer)
      .then(dispatch(hideLoading()))
      .catch((e) => {
        console.warn("Error in handleAnswerQuestion: ", e);
      });
  };
};

//Asynchronous function to handle adding new question to Store
export const handleAddQuestion = (question) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    console.log(`From handleAddQuestion, authedUser: `, authedUser);
    dispatch(showLoading());

    return _saveQuestion({
      ...question,
      author: authedUser.id,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
};

//Asynchronous function to handle user asking a new question to Store
export const handleUserAddQuestion = (question) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    console.log(`From handleUserAddQuestion, authedUser: `, authedUser);
    dispatch(showLoading());

    return _saveQuestion({
      ...question,
      author: authedUser.id,
    })
      .then((question) => dispatch(userAddQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
};
