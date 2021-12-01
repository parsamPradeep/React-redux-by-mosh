import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

let unSubscribe = store.subscribe(() => {
  console.log("Store got changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));

unSubscribe();

store.dispatch(bugRemoved(1));
console.log(store.getState());
