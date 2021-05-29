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

//take users object and keys and returns [usernames] used to populate usernames at <Login />
export const getUserNames = (u, k) => {
  const usernames = [];
  for (let i = 0; i < k.length; i++) {
    const element = k[i];
    usernames.push(u[element].name);
  }
  return usernames;
};

//take users object and username and returns authedUser
export const getAuthedUserId = (u, k) => {
  for (const key in u) {
    if (u[key].name === k) {
      return u[key].id;
    }
  }
};

//take users object and userid and returns authedUserName
export const getAuthedUserName = (u, k) => {
  for (const key in u) {
    if (u[key].id === k) {
      return u[key].name;
    }
  }
};

//takes the authedUser and returns if question is answered or not, used in <Dashboard/>
export const checkAnswered = (q, u) => {
  const question = q;
  let votes = [...question.optionOne.votes, ...question.optionTwo.votes];
  if (votes.find((v) => v === u) === undefined) {
    return false;
  }
  return true;
};

//format question date used in <Question/>
export const formatTime = (timestamp) => {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
};
