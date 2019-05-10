const usersSelectors = {};

usersSelectors.isFetchingUsers = state => state.users.isFetching;

usersSelectors.getUserById = (state, id) => state.users.byId[id];

usersSelectors.getUsersErrorCode = state => state.users.errorCode;

export default usersSelectors;
