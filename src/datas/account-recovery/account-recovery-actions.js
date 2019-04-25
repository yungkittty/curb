import accountRecoveryActionsTypes from "./account-recovery-actions-types";

const accountRecoveryActions = {
  postAccountRecoveryEmailRequest: payload => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_REQUEST,
    payload
  }),
  postAccountRecoveryEmailSuccess: () => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_SUCCESS,
    payload: undefined
  }),
  postAccountRecoveryEmailFailure: error => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_FAILURE,
    payload: error,
    error: true
  }),
  postAccountRecoveryPasswordCodeRequest: payload => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_REQUEST,
    payload
  }),
  postAccountRecoveryPasswordCodeSuccess: () => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_SUCCESS,
    payload: undefined
  }),
  postAccountRecoveryPasswordCodeFailure: error => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_FAILURE,
    payload: error,
    error: true
  }),
  postAccountRecoveryPasswordRequest: payload => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_REQUEST,
    payload
  }),
  postAccountRecoveryPasswordSuccess: () => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_SUCCESS,
    payload: undefined
  }),
  postAccountRecoveryPasswordFailure: error => ({
    type: accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_FAILURE,
    payload: error,
    error: true
  })
};

export default accountRecoveryActions;
