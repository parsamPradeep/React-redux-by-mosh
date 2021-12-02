import { createAction, createReducer } from "@reduxjs/toolkit";

//Action Creators
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");
// Reducer

let lastId = 1;
export default createReducer([], {
  //key : value
  //action: functions(event => event handler)

  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      Id: lastId++,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugResolved.type]: (bugs, action) => {
    let index = bugs.findIndex((bug) => bug.Id === action.payload.Id);
    bugs[index].resolved = true;
  },
});
