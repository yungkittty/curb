import { combineReducers } from "redux";
import accountActionsTypes from "./account-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case accountActionsTypes.DELETE_ACCOUNT_REQUEST:
      return true;
    case accountActionsTypes.DELETE_ACCOUNT_SUCCESS:
    case accountActionsTypes.DELETE_ACCOUNT_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case accountActionsTypes.DELETE_ACCOUNT_REQUEST:
    case accountActionsTypes.DELETE_ACCOUNT_SUCCESS:
      return "";
    case accountActionsTypes.DELETE_ACCOUNT_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const accountReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  errorCode
});

export default accountReducer;
