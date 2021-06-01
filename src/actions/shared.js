import { _getUsers, _getQuestions } from "../utils/_DATA";

//import action creators
import { receiveUsers } from "./usersActionsCreators";
import { receiveQuestions } from "./questionsActionCreators";
import { showLoading, hideLoading } from "react-redux-loading";

//actions thunk to get users login information from server - video #2 lesson 7 concept 6
export const handleFetchData = () => (dispatch) => {
  dispatch(showLoading());
  _getUsers()
    .then((users) => {
      dispatch(receiveUsers(users));
    })
    .then(
      _getQuestions().then((questions) => {
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      })
    );
};
