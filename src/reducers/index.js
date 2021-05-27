//I need to combine all the reducers that perform the actions
//based on action.type passed by the action creators || video #1 Lesson 7 concept 7

import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
  authedUser,
  users,
  questions,
});
