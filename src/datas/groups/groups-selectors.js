const groupsSelectors = {};

groupsSelectors.isCreateGroupFetching = state => state.groups.postFetching.isFetching;

groupsSelectors.getCreateGroupErrorCode = state => state.groups.postFetching.errorCode;

groupsSelectors.getGroupById = (state, id) => state.groups.byId[id];

export default groupsSelectors;
