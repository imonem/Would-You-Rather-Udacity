import { Button } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomError() {
  return (
    <Container>
      <h1>
        Error 404!, The question you requested does not exist.
        <Button>
          <Link to='/' style={{ color: "white" }}>
            Help! Get me back to Safety!
          </Link>
        </Button>
      </h1>
    </Container>
  );
}

export default CustomError;
