import _ from "lodash";
import { combineReducers } from "redux";
import usersActionsTypes from "./users-actions-types";

const byId = (state = {}, action) => {
  switch (action.type) {
    case usersActionsTypes.GET_USER_REQUEST:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: true
        }
      };
    case usersActionsTypes.GET_USER_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
          isFetching: false,
          errorCode: ""
        }
      };
    case usersActionsTypes.GET_USER_FAILURE:
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
    case usersActionsTypes.GET_USER_REQUEST:
      return _.union(state, [action.payload.id]);
    default:
      return state;
  }
};

const usersReducer = combineReducers({ byId, allIds });

export default usersReducer;
