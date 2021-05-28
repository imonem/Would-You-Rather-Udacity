// import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";
// import FormControl from "@material-ui/core/FormControl";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useDispatch, useSelector } from "react-redux";
import { handleGetQuestions, handleUserLoginData } from "../actions/shared";
import Dashboard from "./Dashboard";

function App() {
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleUserLoginData());
    dispatch(handleGetQuestions());
  }, [dispatch]);

  return (
    <div className='container'>
      {authedUser === null ? <h3>Loading...</h3> : <Dashboard />}
    </div>
  );
}

export default App;
