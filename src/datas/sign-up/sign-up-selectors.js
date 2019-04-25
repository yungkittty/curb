const signUpSelectors = {};

signUpSelectors.isFetchingSignUp = state => state.signUp.isFetching;

signUpSelectors.getSignUpErrorCode = state => state.signUp.errorCode;

export default signUpSelectors;
