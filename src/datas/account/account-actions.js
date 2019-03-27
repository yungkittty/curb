import accountActionsTypes from "./account-actions-types";

const accountActions = {
  emailResetPassRequest: payload => ({
    type: accountActionsTypes.EMAIL_RESETPASS_REQUEST,
    payload
  }),
  emailResetPassSuccess: () => ({
    type: accountActionsTypes.EMAIL_RESETPASS_SUCCESS,
    payload: undefined
  }),
  emailResetPassFailure: error => ({
    type: accountActionsTypes.EMAIL_RESETPASS_FAILURE,
    payload: error,
    error: true
  }),
  validateCodeRequest: payload => ({
    type: accountActionsTypes.VALIDATE_CODE_REQUEST,
    payload
  }),
  validateCodeSuccess: () => ({
    type: accountActionsTypes.VALIDATE_CODE_SUCCESS,
    payload: undefined
  }),
  validateCodeFailure: error => ({
    type: accountActionsTypes.VALIDATE_CODE_FAILURE,
    payload: error,
    error: true
  }),
  resetPassRequest: payload => ({
    type: accountActionsTypes.RESET_PASS_REQUEST,
    payload
  }),
  resetPassSuccess: () => ({
    type: accountActionsTypes.RESET_PASS_SUCCESS,
    payload: undefined
  }),
  resetPassFailure: error => ({
    type: accountActionsTypes.RESET_PASS_FAILURE,
    payload: error,
    error: true
  })
};

export default accountActions;
