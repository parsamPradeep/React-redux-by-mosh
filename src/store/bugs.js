import { createAction } from "@reduxjs/toolkit";

//Action Creators
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");
// Reducer

let lastId = 1;

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          Id: lastId++,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.Id !== action.payload.Id);

    case bugResolved.type:
      return state.map((bug) =>
        bug.Id !== action.payload.Id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
