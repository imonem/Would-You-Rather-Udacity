import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar, { hideLoading, showLoading } from "react-redux-loading";
import { handleFetchData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import CustomError from "./CustomError";
import Navmenu from "./Navmenu";
import Leaderboard from "./Leaderboard";

function App() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  // const isAppMounted = useRef(true);
  // useEffect(() => {
  //   return () => {
  //     isAppMounted.current = false;
  //   };
  // }, []);
  useEffect(() => {
    dispatch(showLoading());
    dispatch(handleFetchData());
    dispatch(hideLoading());
  }, [dispatch]);

  //todo: Refactor for the sake of the loading bar

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        {authedUser === null ? (
          <LoginPage />
        ) : (
          <Fragment>
            <Navmenu />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/questions/:id' exact component={QuestionPage} />
              <Route path='/add' exact component={NewQuestion} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='*' component={CustomError} />
              <Redirect to='/404' />
            </Switch>
          </Fragment>
        )}
      </Fragment>
    </Router>
  );
}

export default App;
