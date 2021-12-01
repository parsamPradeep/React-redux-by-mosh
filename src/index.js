import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

let unsubscribe = store.subscribe(() => {
  console.log("Store got changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));

unsubscribe();

store.dispatch(bugAdded("Bug2"));

console.log(store.getState());
