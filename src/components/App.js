import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar, { hideLoading, showLoading } from "react-redux-loading";
import LoginPage from "./LoginPage";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import Navmenu from "./Navmenu";
import Question from "./Question";
import Container from "react-bootstrap/Container";

function App() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    showLoading();
    dispatch(handleFetchData());
    hideLoading();
  }, [dispatch]);
  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <Navmenu />
        <Container>
          {authedUser === null ? (
            <LoginPage />
          ) : (
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/question/:id' exact component={QuestionPage} />
              <Route path='/new' exact component={NewQuestion} />
            </div>
          )}
        </Container>
      </Fragment>
    </Router>
  );
}

export default App;
