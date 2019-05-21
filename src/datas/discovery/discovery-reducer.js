import _ from "lodash";
import discoveryActionsTypes from "./discovery-actions-types";
import { groupsActionsTypes } from "../groups";

const discoveryReducer = (state = {}, action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_SUCCESS:
      return _.assign({}, state, action.payload);
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return { groups: _.without(state, action.payload.id) };
    default:
      return state;
  }
};

export default discoveryReducer;
