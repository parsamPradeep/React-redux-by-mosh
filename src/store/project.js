import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    //action => action handlers
    projectAdded: (projects, action) => {
      projects.push({
        Id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
