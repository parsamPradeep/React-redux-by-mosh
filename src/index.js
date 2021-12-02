import configureStore from "./store/configureStore";
import {
  bugAdded,
  getUnresolvedBugs,
  bugResolved,
  bugsAssignedtoUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/project";
import { userAdded } from "./store/users";

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

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(bugsAssignedtoUser({ bugId: 1, userId: 1 }));

let unsolved = getUnresolvedBugs(store.getState());
let bugsByuser = getBugsByUser(1)(store.getState());
console.log(unsolved);
console.log(bugsByuser);

console.log(store.getState());
