const groupsSelectors = {};

groupsSelectors.isFetchingGroups = state => state.groups.isFetching;

groupsSelectors.getGroupById = (state, id) => state.groups.byId[id];

groupsSelectors.getGroupsErrorCode = state => state.groups.errorCode;

export default groupsSelectors;
