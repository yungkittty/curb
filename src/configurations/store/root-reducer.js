import { combineReducers } from "redux";
import { currentUserReducer as currentUser } from "../../datas/current-user";
import { usersReducer as users } from "../../datas/users";
import { groupsReducer as groups } from "../../datas/groups";

const rootReducer = combineReducers({ currentUser, users, groups });

export default rootReducer;
