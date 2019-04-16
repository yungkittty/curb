import signUpActionsTypes from "./sign-up-actions-types";

const initialState = { isFetching: false, errorCode: "" };

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpActionsTypes.SIGN_UP_REQUEST:
    case signUpActionsTypes.DELETE_ACCOUNT_REQUEST:
      return { ...state, isFetching: true };
    case signUpActionsTypes.SIGN_UP_SUCCESS:
    case signUpActionsTypes.DELETE_ACCOUNT_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case signUpActionsTypes.SIGN_UP_FAILURE:
    case signUpActionsTypes.DELETE_ACCOUNT_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.errorCode };
    default:
      return state;
  }
};

export default signUpReducer;
