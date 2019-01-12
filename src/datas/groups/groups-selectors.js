const groupsSelectors = {};

groupsSelectors.getGroupById = (state, id) => state.groups.byId[id];

export default groupsSelectors;
