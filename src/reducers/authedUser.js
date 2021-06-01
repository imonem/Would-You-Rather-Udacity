import * as actions from "../actions/actionTypes";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case actions.SET_AUTHED_USER:
      return action.payload;
    default:
      return state;
  }
}
