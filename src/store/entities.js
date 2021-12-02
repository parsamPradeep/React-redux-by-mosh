import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectReducer from "./project";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectReducer,
});
