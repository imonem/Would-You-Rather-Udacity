import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar, { hideLoading, showLoading } from "react-redux-loading";
import LoginPage from "./LoginPage";
import NewQuestion from "./NewQuestion";

function App() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    showLoading();
    dispatch(handleFetchData());
    hideLoading();
  }, [dispatch]);
  return (
    <div>
      <LoadingBar />
      {/* <NewQuestion /> */}
      {authedUser === null ? <LoginPage /> : <NewQuestion />}
    </div>
  );
}

export default App;
