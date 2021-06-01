import React from "react";
import { Container } from "react-bootstrap";

function CustomError() {
  return (
    <Container>
      <h1>
        Error 404!, The page you requested does not exist. Please use the login
        button to be redirected to app.
      </h1>
    </Container>
  );
}

export default CustomError;
