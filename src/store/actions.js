import * as action from "./actionTypes";

export const bugAdded = (description) => {
  return {
    type: action.BUG_ADDED,
    payload: {
      description: description,
    },
  };
};

export const bugRemoved = (Id) => {
  return {
    type: action.BUG_REMOVED,
    payload: {
      Id: Id,
    },
  };
};

export const bugResolved = (Id) => {
  return {
    type: action.BUG_RESOLVED,
    payload: {
      Id: Id,
    },
  };
};
