import _ from "lodash";
import signUpActionTypes from "./sign-up-actions-types";

const initialState = { isFetching: false };

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpActionTypes.SIGN_UP_REQUEST:
      return _.assign({}, state, { isFetching: true });
    case signUpActionTypes.SIGN_UP_SUCCESS:
    case signUpActionTypes.SIGN_UP_FAILURE:
      return _.assign({}, state, { isFetching: false });
    default:
      return state;
  }
};

export default signUpReducer;
