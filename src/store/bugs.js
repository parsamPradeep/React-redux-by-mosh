// Action Types

const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

//Action Creators

export const bugAdded = (description) => {
  return {
    type: BUG_ADDED,
    payload: {
      description: description,
    },
  };
};

export const bugRemoved = (Id) => {
  return {
    type: BUG_REMOVED,
    payload: {
      Id: Id,
    },
  };
};

export const bugResolved = (Id) => {
  return {
    type: BUG_RESOLVED,
    payload: {
      Id: Id,
    },
  };
};
// Reducer

let lastId = 1;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          Id: lastId++,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.Id !== action.payload.Id);

    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.Id !== action.payload.Id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
