import accountActionTypes from "./account-actions-types";

const initialState = {
  requestCode: { isFetching: false, isSuccess: false, errorCode: "" },
  validateCode: { isFetching: false, isSuccess: false, errorCode: "" },
  resetPass: { isFetching: false, isSuccess: false, errorCode: "" }
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case accountActionTypes.REQUEST_CODE_REQUEST:
      return { ...state, requestCode: { isFetching: true, isSuccess: false } };
    case accountActionTypes.VALIDATE_CODE_REQUEST:
      return { ...state, validateCode: { isFetching: true, isSuccess: false } };
    case accountActionTypes.RESET_PASS_REQUEST:
      return { ...state, resetPass: { isFetching: true, isSuccess: false } };
    case accountActionTypes.REQUEST_CODE_SUCCESS:
      return { ...state, requestCode: { isFetching: false, isSuccess: true, errorCode: "" } };
    case accountActionTypes.VALIDATE_CODE_SUCCESS:
      return { ...state, validateCode: { isFetching: false, isSuccess: true, errorCode: "" } };
    case accountActionTypes.RESET_PASS_SUCCESS:
      return { ...state, resetPass: { isFetching: false, isSuccess: true, errorCode: "" } };
    case accountActionTypes.REQUEST_CODE_FAILURE:
      return { ...state, requestCode: { isFetching: false, errorCode: action.payload.response.data.code } };
    case accountActionTypes.VALIDATE_CODE_FAILURE:
      return { ...state, validateCode: { isFetching: false, errorCode: action.payload.response.data.code } };
    case accountActionTypes.RESET_PASS_FAILURE:
      return { ...state, resetPass: { isFetching: false, errorCode: action.payload.response.data.code } };
    default:
      return state;
  }
};

export default accountReducer;
