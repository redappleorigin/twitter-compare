import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise";
import { browserHistory } from "react-router";
import { syncHistory } from "redux-simple-router";
import thunk from "redux-thunk";

import reducer from "./reducers";

const middleware = [
  syncHistory(browserHistory),
  thunk,
  promise,
];

if (__STAGE__ === "development") {
  const logger = require("redux-logger");

  middleware.push(logger({ collapsed: true, duration: true }));
}

export default function configureStore(initialState) {
  return compose(
    applyMiddleware(...middleware),
  )(createStore)(reducer, initialState);
}
