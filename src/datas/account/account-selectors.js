const accountSelectors = {};

accountSelectors.isFetchingAccount = state => state.account.isFetching;

accountSelectors.getAccountErrorCode = state => state.account.errorCode;

export default accountSelectors;
