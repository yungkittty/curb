const usersSelectors = {};

usersSelectors.isUserPatching = state => state.users.patchingUser.isFetching;

usersSelectors.getUserPatchingErrorCode = state => state.users.patchingUser.errorCode;

usersSelectors.getUserById = (state, id) => state.users.byId[id];

export default usersSelectors;
