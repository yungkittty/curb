import signUpActionsTypes from "./sign-up-actions-types";

const signUpActions = {
  signUpRequest: payload => ({
    type: signUpActionsTypes.SIGN_UP_REQUEST,
    payload
  }),
  signUpSuccess: () => ({
    type: signUpActionsTypes.SIGN_UP_SUCCESS,
    payload: undefined
  }),
  signUpFailure: error => ({
    type: signUpActionsTypes.SIGN_UP_FAILURE,
    payload: error,
    error: true
  }),
  deleteAccountRequest: payload => ({
    type: signUpActionsTypes.DELETE_ACCOUNT_REQUEST,
    payload
  }),
  deleteAccountSuccess: () => ({
    type: signUpActionsTypes.DELETE_ACCOUNT_SUCCESS,
    payload: undefined
  }),
  deleteAccountFailure: error => ({
    type: signUpActionsTypes.DELETE_ACCOUNT_FAILURE,
    payload: error,
    error: true
  })
};

export default signUpActions;
