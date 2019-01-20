import _ from "lodash";
import signInActionsTypes from "../sign-in/sign-in-actions-types";
import signUpActionsTypes from "../sign-up/sign-up-actions-types";

const initialState = { id: "", token: "", refreshToken: "" };

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInActionsTypes.SIGN_IN_SUCCESS:
      return _.assign({}, state, action.payload);
    case signInActionsTypes.SIGN_OUT_SUCCESS:
      return _.assign({}, state, initialState);
    case signUpActionsTypes.DELETE_ACCOUNT_SUCCESS:
      return _.assign({}, state, initialState);
    default:
      return state;
  }
};

export default currentUserReducer;
