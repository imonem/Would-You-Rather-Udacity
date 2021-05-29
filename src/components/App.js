import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import LoginPage from "./LoginPage";

function App() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchData());
  }, [dispatch]);
  return (
    <div>
      <LoadingBar />
      {authedUser === null ? <LoginPage /> : <Dashboard />}
    </div>
  );
  // return <>{authedUser === null ? <LoginPage /> : <Dashboard />}</>;
}

export default App;
