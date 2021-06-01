import * as actions from "../actions/actionTypes";

const users = (state = {}, action) => {
  const { answer, authedUser, qid, question } = action;
  switch (action.type) {
    case actions.RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case actions.ANSWER_QUESTION:
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
    case actions.ADD_QUESTION:
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id]),
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
