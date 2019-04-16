const groupsSelectors = {};

groupsSelectors.isCreateGroupFetching = state => state.groups.postFetching.isFetching;

groupsSelectors.getGroupById = (state, id) => state.groups.byId[id];

export default groupsSelectors;
