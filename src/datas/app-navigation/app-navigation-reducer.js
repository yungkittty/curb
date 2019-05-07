import { combineReducers } from "redux";
import appNavigationActionsTypes from "./app-navigation-actions-types";

const isShowed = (state = false, action) => {
  switch (action.type) {
    case appNavigationActionsTypes.SHOW_APP_NAVIGATION:
      return true;
    case appNavigationActionsTypes.HIDE_APP_NAVIGATION:
      return false;
    default:
      return state;
  }
};

const appNavigationReducer = combineReducers({
  // eslint-disable-line
  isShowed
});

export default appNavigationReducer;
