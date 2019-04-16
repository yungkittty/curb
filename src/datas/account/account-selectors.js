const accountSelectors = {};

accountSelectors.isAccountRequestCodeFetching = state => state.account.requestCode.isFetching;

accountSelectors.isAccountRequestCodeSuccess = state => state.account.requestCode.isSuccess;

accountSelectors.getAccountRequestCodeErrorCode = state => state.account.requestCode.errorCode;

accountSelectors.isAccountValidateCodeFetching = state => state.account.validateCode.isFetching;

accountSelectors.isAccountValidateCodeSuccess = state => state.account.validateCode.isSuccess;

accountSelectors.getAccountValidateCodeErrorCode = state => state.account.validateCode.errorCode;

accountSelectors.isAccountResetPassFetching = state => state.account.resetPass.isFetching;

accountSelectors.isAccountResetPassSuccess = state => state.account.resetPass.isSuccess;

accountSelectors.getAccountResetPassErrorCode = state => state.account.resetPass.errorCode;

export default accountSelectors;
