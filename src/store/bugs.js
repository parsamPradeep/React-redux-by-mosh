import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    //action => action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        Id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      let index = bugs.findIndex((bug) => bug.Id === action.payload.Id);
      bugs[index].resolved = true;
    },
  },
});

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;
