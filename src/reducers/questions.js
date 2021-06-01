import * as actions from "../actions/actionTypes";

export default function questions(state = {}, action) {
  switch (action.type) {
    case actions.RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case actions.ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case actions.ANSWER_QUESTION: //destructure please its already painfull!!!!!!!!!!!!!!!!!
      const { answer, qid, authedUser } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
