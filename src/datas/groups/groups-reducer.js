import _ from "lodash";
import { combineReducers } from "redux";
import groupsActionsTypes from "./groups-actions-types";

const byId = (state = {}, action) => {
  switch (action.type) {
    case groupsActionsTypes.GET_GROUP_REQUEST:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: true
        }
      };
    case groupsActionsTypes.GET_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
          isFetching: false,
          errorCode: ""
        }
      };
    case groupsActionsTypes.GET_GROUP_FAILURE:
      return {
        ...state,
        [action.payload.config.data.id]: {
          ...state[action.payload.config.data.id],
          isFetching: true,
          errorCode: action.payload.response.data.code
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

const groupsReducer = combineReducers({ byId, allIds });

export default groupsReducer;
