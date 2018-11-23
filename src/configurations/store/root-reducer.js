import { combineReducers } from "redux";
import { currentUserReducer as currentUser } from "../../datas/current-user";
import { usersReducer as users } from "../../datas/users";

const rootReducer = combineReducers({ currentUser, users });

export default rootReducer;
