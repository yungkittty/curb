import { combineReducers } from "redux";
import signInActionsTypes from "./sign-in-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case signInActionsTypes.SIGN_IN_REQUEST:
    case signInActionsTypes.SIGN_OUT_REQUEST:
      return true;
    case signInActionsTypes.SIGN_IN_SUCCESS:
    case signInActionsTypes.SIGN_OUT_SUCCESS:
    case signInActionsTypes.SIGN_IN_FAILURE:
    case signInActionsTypes.SIGN_OUT_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case signInActionsTypes.SIGN_IN_REQUEST:
    case signInActionsTypes.SIGN_OUT_REQUEST:
    case signInActionsTypes.SIGN_IN_SUCCESS:
    case signInActionsTypes.SIGN_OUT_SUCCESS:
      return "";
    case signInActionsTypes.SIGN_IN_FAILURE:
    case signInActionsTypes.SIGN_OUT_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const signInReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  errorCode
});

export default signInReducer;
