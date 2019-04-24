import _ from "lodash";
import { combineReducers } from "redux";
import mediasActionsTypes from "./medias-actions-types";

const isPosting = (state = false, action) => {
  switch (action.type) {
    case mediasActionsTypes.POST_MEDIA_AVATAR_REQUEST:
      return true;
    case mediasActionsTypes.POST_MEDIA_AVATAR_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_AVATAR_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case mediasActionsTypes.POST_MEDIA_AVATAR_SUCCESS:
      return "";
    case mediasActionsTypes.POST_MEDIA_AVATAR_FAILURE:
      console.log(action);
      return action.payload.message;
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case mediasActionsTypes.GET_MEDIA_REQUEST:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: true
        }
      };
    case mediasActionsTypes.GET_MEDIA_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
          isFetching: false,
          errorCode: ""
        }
      };
    case mediasActionsTypes.GET_MEDIA_FAILURE:
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
    case mediasActionsTypes.GET_MEDIA_REQUEST:
      return _.union(state, [action.payload.id]);
    default:
      return state;
  }
};

const mediasReducer = combineReducers({ isPosting, errorCode, byId, allIds });

export default mediasReducer;
