import _ from "lodash";
import { combineReducers } from "redux";
import postActionsTypes from "./post-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case postActionsTypes.POST_POST_REQUEST:
    case postActionsTypes.POST_PIN_POST_REQUEST:
    case postActionsTypes.POST_REPORT_POST_REQUEST:
    case postActionsTypes.DELETE_POST_REQUEST:
    case postActionsTypes.POST_LIKE_POST_REQUEST:
      return true;
    case postActionsTypes.POST_POST_SUCCESS:
    case postActionsTypes.POST_POST_FAILURE:
    case postActionsTypes.POST_PIN_POST_SUCCESS:
    case postActionsTypes.POST_PIN_POST_FAILURE:
    case postActionsTypes.POST_REPORT_POST_SUCCESS:
    case postActionsTypes.POST_REPORT_POST_FAILURE:
    case postActionsTypes.POST_DELETE_POST_SUCCESS:
    case postActionsTypes.POST_DELETE_POST_FAILURE:
    case postActionsTypes.POST_LIKE_POST_SUCCESS:
    case postActionsTypes.POST_LIKE_POST_FAILURE:
      return false;
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case postActionsTypes.GET_POST_REQUEST:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: true
        }
      };
    case postActionsTypes.GET_POST_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
          isFetching: false,
          errorCode: ""
        }
      };
    case postActionsTypes.GET_POST_FAILURE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: false,
          errorCode: action.payload.errorCode
        }
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case postActionsTypes.GET_POST_REQUEST:
      return _.union(state, [action.payload.id]);
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case postActionsTypes.POST_POST_REQUEST:
    case postActionsTypes.POST_POST_SUCCESS:
      return "";
    case postActionsTypes.POST_POST_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const postReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  byId,
  allIds,
  errorCode
});

export default postReducer;
