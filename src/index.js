import configureStore from "./store/configureStore";
import { bugAdded, getUnresolvedBugs, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/project";

const store = configureStore();
let unsubscribe = store.subscribe(() => {
  console.log("Store got changed!", store.getState());
});

store.dispatch(projectAdded({ name: "project-1" }));
store.dispatch(projectAdded({ name: "project-2" }));
unsubscribe();
store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugResolved({ Id: 2 }));

let unsolved = getUnresolvedBugs(store.getState());
console.log(unsolved);
console.log(store.getState());
