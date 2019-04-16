import accountActionTypes from "./account-actions-types";

const initialState = { isFetching: false, errorCode: "" };

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case accountActionTypes.EMAIL_RESETPASS_REQUEST:
    case accountActionTypes.VALIDATE_CODE_REQUEST:
    case accountActionTypes.RESET_PASS_REQUEST:
      return { ...state, isFetching: true };
    case accountActionTypes.EMAIL_RESETPASS_SUCCESS:
    case accountActionTypes.VALIDATE_CODE_SUCCESS:
    case accountActionTypes.RESET_PASS_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case accountActionTypes.EMAIL_RESETPASS_FAILURE:
    case accountActionTypes.VALIDATE_CODE_FAILURE:
    case accountActionTypes.RESET_PASS_FAILURE:
      return { ...state, isFetching: false, errorCode: action.payload.response.data.code };
    default:
      return state;
  }
};

export default accountReducer;
