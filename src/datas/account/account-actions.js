import accountActionsTypes from "./account-actions-types";

const accountActions = {
  requestAccountResetPasswordCodeRequest: payload => ({
    type: accountActionsTypes.REQUEST_ACCOUNT_RESET_PASSWORD_CODE_REQUEST,
    payload
  }),
  requestAccountResetPasswordCodeSuccess: () => ({
    type: accountActionsTypes.REQUEST_ACCOUNT_RESET_PASSWORD_CODE_SUCCESS,
    payload: undefined
  }),
  requestAccountResetPasswordCodeFailure: error => ({
    type: accountActionsTypes.REQUEST_ACCOUNT_RESET_PASSWORD_CODE_FAILURE,
    payload: error,
    error: true
  }),
  validateAccountResetPasswordCodeRequest: payload => ({
    type: accountActionsTypes.VALIDATE_ACCOUNT_RESET_PASSWORD_CODE_REQUEST,
    payload
  }),
  validateAccountResetPasswordCodeSuccess: () => ({
    type: accountActionsTypes.VALIDATE_ACCOUNT_RESET_PASSWORD_CODE_SUCCESS,
    payload: undefined
  }),
  validateAccountResetPasswordCodeFailure: error => ({
    type: accountActionsTypes.VALIDATE_ACCOUNT_RESET_PASSWORD_CODE_FAILURE,
    payload: error,
    error: true
  }),
  resetAccountPasswordRequest: payload => ({
    type: accountActionsTypes.RESET_ACCOUNT_PASSWORD_REQUEST,
    payload
  }),
  resetAccountPasswordSuccess: () => ({
    type: accountActionsTypes.RESET_ACCOUNT_PASSWORD_SUCCESS,
    payload: undefined
  }),
  resetAccountPasswordFailure: error => ({
    type: accountActionsTypes.RESET_ACCOUNT_PASSWORD_FAILURE,
    payload: error,
    error: true
  })
};

export default accountActions;
