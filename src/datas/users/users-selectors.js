const usersSelectors = {};

usersSelectors.getUserById = (state, id) => state.users.byId[id];

export default usersSelectors;
