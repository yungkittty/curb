import signUpActionsTypes from "./sign-up-actions-types";

const signUpActions = {
  signUpRequest: () => ({ type: signUpActionsTypes.SIGN_UP_REQUEST }),
  signUpSuccess: () => ({ type: signUpActionsTypes.SIGN_UP_SUCCESS }),
  signUpFailure: () => ({ type: signUpActionsTypes.SIGN_UP_FAILURE })
};

export default signUpActions;
