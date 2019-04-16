import accountActionsTypes from "./account-actions-types";

const accountActions = {
  requestCodeRequest: payload => ({
    type: accountActionsTypes.REQUEST_CODE_REQUEST,
    payload
  }),
  requestCodeSuccess: () => ({
    type: accountActionsTypes.REQUEST_CODE_SUCCESS,
    payload: undefined
  }),
  requestCodeFailure: error => ({
    type: accountActionsTypes.REQUEST_CODE_FAILURE,
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
