//Action creator to update the store for handleUserLoginData
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
