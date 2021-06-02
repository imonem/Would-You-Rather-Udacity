import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

const UserCard = ({ name, avatar, qAsk, qAnswer }) => {
  return (
    <Container>
      <Card>
        <Card.Img src={avatar} style={{ maxWidth: `300px` }} className='mb-2' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup>
            <ListGroup.Item>Questions asked {qAsk}</ListGroup.Item>
            <ListGroup.Item>Questions answered {qAnswer}</ListGroup.Item>
            <ListGroup.Item>Total score {qAsk + qAnswer}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserCard;
