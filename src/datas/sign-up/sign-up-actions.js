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
  })
};

export default signUpActions;
