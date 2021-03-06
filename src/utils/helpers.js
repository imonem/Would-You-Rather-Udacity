//takes the current question and users object to return author avatar from users object
export const getAuthorInfo = (q, u) => {
  const author = q.author;
  const userId = Object.keys(u);

  for (let i = 0; i < userId.length; i++) {
    const element = userId[i];
    if (author === element) {
      return [u[element].name, u[element].avatarURL];
    }
  }
};

//takes the question and authedUser then returns if question is answered or not, used in <QuestionPage /> --- REDUNDANT/REFACTORED in <Dashboard />
export const checkAnswered = (q, u) => {
  const question = q;
  let votes = [...question.optionOne.votes, ...question.optionTwo.votes];
  if (votes.find((v) => v === u) === undefined) {
    return false;
  }
  return true;
};

//takes the authedUser and returns and array of number of votes on each option and which authedUser voted, used in <QuestionDetails/>
export const countVotes = (q, u, users) => {
  const votesOne = [...q.optionOne.votes];
  const votesTwo = [...q.optionTwo.votes];
  const totalUsers = Object.keys(users).filter(
    (u) => votesOne.includes(u) || votesTwo.includes(u)
  ).length;

  let authedUserVote = "";
  if (votesOne.includes(u) === true) {
    authedUserVote = `You voted for ${q.optionOne.text}`;
  } else {
    if (votesTwo.includes(u) === true) {
      authedUserVote = `You voted for ${q.optionTwo.text}`;
    }
  }

  return [
    votesOne.length,
    votesTwo.length,
    (votesOne.length / totalUsers) * 100,
    (votesTwo.length / totalUsers) * 100,
    authedUserVote,
  ];
};

//format question date used in all modules that display a question component
export const formatTime = (timestamp) => {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
};
