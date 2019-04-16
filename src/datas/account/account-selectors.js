const accountSelectors = {};

accountSelectors.isAccountFetching = state => state.account.isFetching;

accountSelectors.getAccountErrorCode = state => state.account.errorCode;

export default accountSelectors;
