import { combineReducers } from "redux";
import accountRecoveryActionsTypes from "./account-recovery-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_REQUEST:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_REQUEST:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_REQUEST:
      return true;
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_SUCCESS:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_FAILURE:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_SUCCESS:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_FAILURE:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_SUCCESS:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_REQUEST:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_SUCCESS:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_REQUEST:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_SUCCESS:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_REQUEST:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_SUCCESS:
      return "";
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_FAILURE:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_FAILURE:
    case accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const accountRecoveryReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  errorCode
});

export default accountRecoveryReducer;
