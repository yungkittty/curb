import signInActionTypes from "./sign-in-actions-types";

const initialState = { isFetching: false, errorCode: "" };

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInActionTypes.SIGN_IN_REQUEST:
      return { ...state, isFetching: true };
    case signInActionTypes.SIGN_IN_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case signInActionTypes.SIGN_IN_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.response.data.code };
    default:
      return state;
  }
};

export default signInReducer;
