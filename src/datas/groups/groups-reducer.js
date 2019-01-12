import _ from "lodash";
import groupsActionsTypes from "./groups-actions-types";

const initialState = { byId: {}, allIds: [] };

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case groupsActionsTypes.GET_GROUP_SUCCESS:
      return _.assign({}, state, {
        byId: _.assign({}, state.byId, { [action.payload.id]: action.payload }),
        allIds: _.merge([], state.allIds, [action.payload.id])
      });
    case groupsActionsTypes.GET_GROUPS_SUCCESS:
      return _.assign({}, state, {
        byId: _.assign({}, state.byId, _.keyBy(action.payload.groups, "id")),
        allIds: _.merge([], state.allIds, _.map(action.payload.groups, "id"))
      });
    default:
      return state;
  }
};

export default groupsReducer;
