import signInActionsTypes from "./sign-in-actions-types";

const signInActions = {
  signInRequest: () => ({ type: signInActionsTypes.SIGN_IN_REQUEST }),
  signInSuccess: () => ({ type: signInActionsTypes.SIGN_IN_SUCCESS }),
  signInFailure: () => ({ type: signInActionsTypes.SIGN_IN_FAILURE }),
  signOutRequest: () => ({ type: signInActionsTypes.SIGN_OUT_REQUEST }),
  signOutSuccess: () => ({ type: signInActionsTypes.SIGN_OUT_SUCCESS }),
  signOutFailure: () => ({ type: signInActionsTypes.SIGN_OUT_FAILURE })
};

export default signInActions;
