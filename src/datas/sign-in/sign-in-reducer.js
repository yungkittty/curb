import _ from "lodash";
import signInActionTypes from "./sign-in-actions-types";

const initialState = { isFetching: false };

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInActionTypes.SIGN_IN_REQUEST:
      return _.assign({}, state, { isFetching: true });
    case signInActionTypes.SIGN_IN_SUCCESS:
    case signInActionTypes.SIGN_IN_FAILURE:
      return _.assign({}, state, { isFetching: false });
    default:
      return state;
  }
};

export default signInReducer;
