import * as actions from "./actionTypes";
let lastId = 1;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          Id: lastId++,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.Id !== action.payload.Id);

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.Id !== action.payload.Id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
