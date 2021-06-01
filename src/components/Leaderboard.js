import React from "react";
import { useSelector } from "react-redux";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import UserCard from "./UserCard";

const Leaderboard = () => {
  const users = useSelector((state) => state.users);

  // const history = useHistory();

  const handleUserScores = (usersObject) => {
    const handledUsersData = Object.values(users)
      .sort(
        (a, b) =>
          Object.keys(b.answers).length +
          b.questions.length -
          (Object.keys(a.answers).length + a.questions.length)
      )
      .map((user) => [
        user.name,
        user.avatarURL,
        user.questions.length,
        Object.keys(user.answers).length,
      ]);
    console.log(`This is the handledUsersData: `, handledUsersData);
    return handledUsersData;
  };

  return (
    <Container>
      <h1 className='text-center my-2'>Leaderboard</h1>
      <ListGroup>
        {handleUserScores(users).map((user) => (
          <ListGroupItem key={user[0]}>
            <UserCard
              user={user[0]}
              avatar={user[1]}
              qAsk={user[2]}
              qAnswer={user[3]}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Leaderboard;
