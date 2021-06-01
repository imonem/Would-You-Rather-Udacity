import * as actions from "./actionTypes";

export function setAuthedUser(id) {
  return {
    type: actions.SET_AUTHED_USER,
    id,
  };
}
