import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectReducer from "./project";
import userReducer from "./users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectReducer,
  users: userReducer,
});
