import _ from "lodash";
import { combineReducers } from "redux";
import discoveryActionsTypes from "./discovery-actions-types";
import groupsActionsTypes from "../groups/groups-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_REQUEST:
      return true;
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_FAILURE:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_FAILURE:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_FAILURE:
      return false;
    default:
      return state;
  }
};

const globalSectionGroupsId = (state = [], action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_SUCCESS:
      return [...(action.payload.page !== 1 ? state : []), ...action.payload.groups];
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const customSectionGroupsId = (state = [], action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_SUCCESS:
      return [...(action.payload.page !== 1 ? state : []), ...action.payload.groups];
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const randomSectionGroupsId = (state = [], action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_SUCCESS:
      return [...(action.payload.page !== 1 ? state : []), ...action.payload.groups];
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_SUCCESS:
      return "";
    case discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_FAILURE:
    case discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_FAILURE:
    case discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const discoveryReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  globalSectionGroupsId,
  customSectionGroupsId,
  randomSectionGroupsId,
  errorCode
});

export default discoveryReducer;
