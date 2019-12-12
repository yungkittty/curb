import _ from "lodash";
import groupsSelectors from "../groups/groups-selectors";

const usersSelectors = {};

usersSelectors.isFetchingUsers = state => state.users.isFetching;

usersSelectors.getUserById = (state, id) => state.users.byId[id];

usersSelectors.getUsersChatsIdById = (state, id) => _.filter((usersSelectors.getUserById(state, id) || {}).groups, groupId => _.includes((groupsSelectors.getGroupById(state, groupId) || {}).mediaTypes, "chat"));

usersSelectors.getUsersErrorCode = state => state.users.errorCode;

export default usersSelectors;
