import { combineReducers } from "redux";
import signUpActionsTypes from "../sign-up/sign-up-actions-types";
import signInActionsTypes from "../sign-in/sign-in-actions-types";
import accountActionsTypes from "../account/account-actions-types";

const id = (state = "", action) => {
  switch (action.type) {
    case signUpActionsTypes.SIGN_UP_SUCCESS:
    case signInActionsTypes.SIGN_IN_SUCCESS:
      return action.payload.id;
    case signInActionsTypes.SIGN_OUT_SUCCESS:
    case accountActionsTypes.DELETE_ACCOUNT_SUCCESS:
      return "";
    default:
      return state;
  }
};

const currentUserReducer = combineReducers({
  // eslint-disable-line
  id
});

export default currentUserReducer;
