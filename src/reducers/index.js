import { combineReducers } from "redux";
import { routeReducer as routing } from "redux-simple-router";

import followers from "./followers";
import friends from "./friends";
import request from "./request";

export default combineReducers({
  followers,
  friends,
  request,
  routing,
});
