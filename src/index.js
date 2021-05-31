//Store exist here, video #2 Lesson 7 concept 7
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, middleware); //middleware logger is added in video #3 lesson 7 concept 7

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
