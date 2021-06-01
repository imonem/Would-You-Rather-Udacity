import { _getUsers, _getQuestions } from "../utils/_DATA";

//import action creators
import { receiveUsers } from "./users";
import { receiveQuestions } from "./actionCreators";
import { showLoading, hideLoading } from "react-redux-loading";

//_getUsers()
//_getQuestions()
//_saveQuestion(question)
//_saveQuestionAnswer({ authedUser, qid, answer })

//action creator to get users login information from server - video #2 lesson 7 concept 6
export function handleFetchData() {
  return (dispatch) => {
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
}

//get questions from server
// export function handleGetQuestions() {
//   return (dispatch) => {
//     _getQuestions().then((questions) => {
//       dispatch(receiveQuestions(questions));
//     });
//   };
// }
