const accountRecoverySelectors = {};

accountRecoverySelectors.isFetchingAccountRecovery = state => state.accountRecovery.isFetching;

accountRecoverySelectors.getAccountRecoveryErrorCode = state => state.accountRecovery.errorCode;

export default accountRecoverySelectors;
