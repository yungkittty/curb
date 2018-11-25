import signInActionsTypes from "./sign-in-actions-types";

const signInActions = {
  signInRequest: payload => ({
    type: signInActionsTypes.SIGN_IN_REQUEST,
    payload
  }),
  signInSuccess: payload => ({
    type: signInActionsTypes.SIGN_IN_SUCCESS,
    payload
  }),
  signInFailure: error => ({
    type: signInActionsTypes.SIGN_IN_FAILURE,
    payload: error,
    error: true
  }),
  signOutRequest: payload => ({
    type: signInActionsTypes.SIGN_OUT_REQUEST,
    payload
  }),
  signOutSuccess: () => ({
    type: signInActionsTypes.SIGN_OUT_SUCCESS,
    payload: undefined
  }),
  signOutFailure: error => ({
    type: signInActionsTypes.SIGN_OUT_FAILURE,
    payload: error,
    error: true
  })
};

export default signInActions;
