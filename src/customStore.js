import reducer from "./reducer";

export function createStore(reducer) {
  let state;
  let listners = [];

  function subscribe(listner) {
    listners.push(listner);
  }

  function dispatch(action) {
    state = reducer(reducer, action);
    for (let i = 0; i < listners.length; i++) {
      listners[i]();
    }
  }

  function getState() {
    return state;
  }
  return {
    dispatch,
    getState,
  };
}
