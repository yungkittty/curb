import { combineReducers } from "redux";
import discoveryActionsTypes from "./discovery-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_SECTIONS_REQUEST:
      return true;
    case discoveryActionsTypes.GET_DISCOVERY_SECTIONS_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_SECTIONS_FAILURE:
      return false;
    default:
      return state;
  }
};

/** @TODO DELETE_GROUP_SUCCESS */

const sections = (state = [], action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_SECTIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_SECTIONS_REQUEST:
    case discoveryActionsTypes.GET_DISCOVERY_SECTIONS_SUCCESS:
      return "";
    case discoveryActionsTypes.GET_DISCOVERY_SECTIONS_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const discoveryReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  sections,
  errorCode
});

export default discoveryReducer;
