import _ from "lodash";
import { combineReducers } from "redux";
import discoveryActionsTypes from "./discovery-actions-types";
import { groupsActionsTypes } from "../groups";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_REQUEST:
      return true;
    case discoveryActionsTypes.GET_DISCOVERY_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_FAILURE:
      return false;
    default:
      return state;
  }
};

// eslint-disable-next-line
const groups = (state = [], action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_SUCCESS:
      return _.union(state, action.payload.groups);
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_SUCCESS:
      return "";
    case discoveryActionsTypes.GET_DISCOVERY_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const discoveryReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  groups,
  errorCode
});

export default discoveryReducer;
