import signUpActionTypes from "./sign-up-actions-types";

const initialState = { isFetching: false, errorCode: "" };

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpActionTypes.SIGN_UP_REQUEST:
      return { ...state, isFetching: true };
    case signUpActionTypes.SIGN_UP_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case signUpActionTypes.SIGN_UP_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.response.data.code };
    case signUpActionTypes.DELETE_ACCOUNT_REQUEST:
      return { ...state, isFetching: true };
    case signUpActionTypes.DELETE_ACCOUNT_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case signUpActionTypes.DELETE_ACCOUNT_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.response.data.code };
    default:
      return state;
  }
};

export default signUpReducer;
