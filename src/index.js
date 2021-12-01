import { bugAdded, bugRemoved } from "./actions";
import store from "./customStore";

store.subscribe(() => {
  console.log("Store got changed!");
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugRemoved(1));

console.log(store.getState());
