import * as action from "./actionTypes";

export let bugAdded = (description) => {
  return {
    type: action.BUG_ADDED,
    payload: {
      description: description,
    },
  };
};

export let bugRemoved = (Id) => {
  return {
    type: action.BUG_REMOVED,
    payload: {
      Id: Id,
    },
  };
};
