import { combineReducers } from "redux";

import { contact } from "./contact";
import { poll } from "./poll";
import { auth } from "./auth";
import { request } from "./request";

const rootReducer = combineReducers({
  auth,
  contact,
  poll,
  request,
});

export default rootReducer;
