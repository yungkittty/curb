import signUpActionTypes from "./sign-up-actions-types";

const initialState = { isFetching: false, errorCode: "" };

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpActionTypes.SIGN_IN_REQUEST:
      return { ...state, isFetching: true };
    case signUpActionTypes.SIGN_IN_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case signUpActionTypes.SIGN_IN_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.response.data.code };
    default:
      return state;
  }
};

export default signUpReducer;
