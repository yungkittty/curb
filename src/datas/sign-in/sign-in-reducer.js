import signInActionsTypes from "./sign-in-actions-types";

const initialState = { isFetching: false, errorCode: "" };

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInActionsTypes.SIGN_IN_REQUEST:
    case signInActionsTypes.SIGN_OUT_REQUEST:
      return { ...state, isFetching: true };
    case signInActionsTypes.SIGN_IN_SUCCESS:
    case signInActionsTypes.SIGN_OUT_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case signInActionsTypes.SIGN_IN_FAILURE:
    case signInActionsTypes.SIGN_OUT_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.errorCode };
    default:
      return state;
  }
};

export default signInReducer;
