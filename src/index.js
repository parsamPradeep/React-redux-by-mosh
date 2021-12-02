import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";

const store = configureStore();
let unsubscribe = store.subscribe(() => {
  console.log("Store got changed!", store.getState());
});

store.dispatch(bugAdded({ description: "Bug1" }));

unsubscribe();

store.dispatch(bugAdded({ description: "Bug2" }));

store.dispatch(bugRemoved({ Id: 1 }));

console.log(store.getState());
