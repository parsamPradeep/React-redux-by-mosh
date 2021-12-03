import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetched: null,
  },
  reducers: {
    //action => action handlers
    bugAdded: (bugs, action) => {
      bugs.list.push({
        Id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      let index = bugs.list.findIndex((bug) => bug.Id === action.payload.Id);
      bugs.list[index].resolved = true;
    },
    bugsAssignedtoUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.Id === bugId);
      bugs.list[index].userId = userId;
    },
  },
});

export const { bugAdded, bugResolved, bugsAssignedtoUser } = slice.actions;
export default slice.reducer;

//Memoization
//bugs => get unresolved bugs from catche

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved) // this logic only executes when there is change in bugs list else get result from state
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
