import _ from "lodash";
import { combineReducers } from "redux";
import groupsActionsTypes from "./groups-actions-types";

const postFetching = (state = { isFetching: false, errorCode: "" }, action) => {
  switch (action.type) {
    case groupsActionsTypes.POST_GROUP_REQUEST:
      return { ...state, isFetching: true };
    case groupsActionsTypes.POST_GROUP_SUCCESS:
      return { ...state, isFetching: false, errorCode: "" };
    case groupsActionsTypes.POST_GROUP_FAILURE:
      return { ...state, isFetching: false, errorCode: "" };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case groupsActionsTypes.GET_GROUP_REQUEST:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isGetting: true
        }
      };
    case groupsActionsTypes.GET_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
          isGetting: false,
          errorCode: ""
        }
      };
    case groupsActionsTypes.GET_GROUP_FAILURE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isGetting: false,
          errorCode: action.payload.errorCode
        }
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case groupsActionsTypes.GET_GROUP_REQUEST:
      return _.union(state, [action.payload.id]);
    default:
      return state;
  }
};

const groupsReducer = combineReducers({ postFetching, byId, allIds });

export default groupsReducer;
