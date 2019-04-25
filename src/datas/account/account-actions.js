import accountActionsTypes from "./account-actions-types";

const accountActions = {
  deleteAccountRequest: payload => ({
    type: accountActionsTypes.DELETE_ACCOUNT_REQUEST,
    payload
  }),
  deleteAccountSuccess: () => ({
    type: accountActionsTypes.DELETE_ACCOUNT_SUCCESS,
    payload: undefined
  }),
  deleteAccountFailure: error => ({
    type: accountActionsTypes.DELETE_ACCOUNT_FAILURE,
    payload: error,
    error: true
  })
};

export default accountActions;
