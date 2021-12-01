import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";

const store = configureStore();
let unsubscribe = store.subscribe(() => {
  console.log("Store got changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));

unsubscribe();

store.dispatch(bugAdded("Bug2"));

store.dispatch(bugRemoved(2));

store.dispatch(bugResolved(1));

console.log(store.getState());
