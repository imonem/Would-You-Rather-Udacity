import * as actions from "../actions/actionTypes";

const users = (state = {}, action) => {
  switch (action.type) {
    case actions.RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case actions.ANSWER_QUESTION:
      const { answer, authedUser, qid } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
};

export default users;

// export default function users(state = {}, action) {
//   switch (action.type) {
//     case actions.RECEIVE_USERS:
//       return {
//         ...state,
//         ...action.users,
//       };
//     case actions.ANSWER_QUESTION:
//       return {
//         ...state,
//       };
//     default:
//       return state;
//   }
// }
