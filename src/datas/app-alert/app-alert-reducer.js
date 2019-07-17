import { combineReducers } from "redux";
import appAlertActionsTypes from "./app-alert-actions-types";

const list = (state = [], action) => {
  switch (action.type) {
    case appAlertActionsTypes.PUSH_APP_ALERT:
      return [...state, action.payload];
    case appAlertActionsTypes.CLEAR_APP_ALERT:
      return [];
    default:
      return state;
  }
};

const appAlertReducer = combineReducers({
  // eslint-disable-line
  list
});

export default appAlertReducer;
