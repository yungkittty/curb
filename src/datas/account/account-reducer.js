import accountActionTypes from "./account-actions-types";

const initialState = {
  isFetching: false,
  errorCode: ""
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case accountActionTypes.REQUEST_ACCOUNT_RESET_PASSWORD_CODE_REQUEST:
    case accountActionTypes.VALIDATE_ACCOUNT_RESET_PASSWORD_CODE_REQUEST:
    case accountActionTypes.RESET_ACCOUNT_PASSWORD_REQUEST:
      return { ...state, isFetching: true };
    case accountActionTypes.REQUEST_ACCOUNT_RESET_PASSWORD_CODE_SUCCESS:
    case accountActionTypes.VALIDATE_ACCOUNT_RESET_PASSWORD_CODE_SUCCESS:
    case accountActionTypes.RESET_ACCOUNT_PASSWORD_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case accountActionTypes.REQUEST_ACCOUNT_RESET_PASSWORD_CODE_FAILURE:
    case accountActionTypes.VALIDATE_ACCOUNT_RESET_PASSWORD_CODE_FAILURE:
    case accountActionTypes.RESET_ACCOUNT_PASSWORD_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.response.data.code };
    default:
      return state;
  }
};

export default accountReducer;
