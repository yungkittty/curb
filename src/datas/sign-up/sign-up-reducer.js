import signUpActionsTypes from "./sign-up-actions-types";

const initialState = { isFetching: false, errorCode: "" };

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpActionsTypes.SIGN_IN_REQUEST:
      return { ...state, isFetching: true };
    case signUpActionsTypes.SIGN_IN_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case signUpActionsTypes.SIGN_IN_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.errorCode };
    default:
      return state;
  }
};

export default signUpReducer;
