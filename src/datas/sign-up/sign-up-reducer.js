import { combineReducers } from "redux";
import signUpActionsTypes from "./sign-up-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case signUpActionsTypes.SIGN_UP_REQUEST:
      return true;
    case signUpActionsTypes.SIGN_UP_SUCCESS:
    case signUpActionsTypes.SIGN_UP_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case signUpActionsTypes.SIGN_UP_REQUEST:
    case signUpActionsTypes.SIGN_UP_SUCCESS:
      return "";
    case signUpActionsTypes.SIGN_UP_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const signUpReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  errorCode
});

export default signUpReducer;
