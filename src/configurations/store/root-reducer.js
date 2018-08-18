import { combineReducers } from "redux";
import { userReducer as userState } from "../../datas/user";

const rootReducer = combineReducers({ userState });

export default rootReducer;
