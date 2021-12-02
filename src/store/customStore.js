import reducer from "./reducers";

function createStore(reducer) {
  let state;
  let listners = [];

  function subscribe(listner) {
    listners.push(listner);
  }

  function dispatch(action) {
    state = reducer(state, action);
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
    subscribe,
  };
}

export default createStore(reducer);
