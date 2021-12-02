import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    //action => action handlers
    userAdded: (users, action) => {
      users.push({
        Id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
