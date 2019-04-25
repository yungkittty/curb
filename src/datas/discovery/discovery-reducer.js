import _ from "lodash";
import { combineReducers } from "redux";
import discoveryActionsTypes from "./discovery-actions-types";

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
