const signInSelectors = {};

signInSelectors.isSignInFetching = state => state.signIn.isFetching;

signInSelectors.getSignInErrorCode = state => state.signIn.errorCode;

export default signInSelectors;
