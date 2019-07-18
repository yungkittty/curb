import _ from "lodash";
import { combineReducers } from "redux";
import discoveryActionsTypes from "./discovery-actions-types";
import groupsActionsTypes from "../groups/groups-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_REQUEST:
      return true;
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_FAILURE:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_FAILURE:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_FAILURE:
      return false;
    default:
      return state;
  }
};

const globalSectionGroups = (state = [], action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_SUCCESS:
      return [...(action.payload.count === 1 ? state : []), ...action.payload.groups];
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const customSectionGroups = (state = [], action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_SUCCESS:
      return [...(action.payload.count === 1 ? state : []), ...action.payload.groups];
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const randomSectionGroups = (state = [], action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_SUCCESS:
      return [...(action.payload.count === 1 ? state : []), ...action.payload.groups];
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_SUCCESS:
      return "";
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_FAILURE:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_FAILURE:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const discoveryReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  globalSectionGroups,
  customSectionGroups,
  randomSectionGroups,
  errorCode
});

export default discoveryReducer;
