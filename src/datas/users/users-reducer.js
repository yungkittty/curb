import _ from "lodash";
import { combineReducers } from "redux";
import usersActionsTypes from "./users-actions-types";
import groupsActionsTypes from "../groups/groups-actions-types";
import mediasActionsTypes from "../medias/medias-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case usersActionsTypes.PATCH_USER_REQUEST:
      return true;
    case usersActionsTypes.PATCH_USER_SUCCESS:
    case usersActionsTypes.PATCH_USER_FAILURE:
      return false;
    default:
      return state;
  }
};

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
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: false,
          errorCode: action.payload.errorCode
        }
      };
    case groupsActionsTypes.POST_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.currentUserId]: {
          ...state[action.payload.currentUserId],
          groups: [
            // eslint-disable-line
            ...state[action.payload.currentUserId].groups,
            action.payload.id
          ]
        }
      };
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          avatarUrl: action.payload.avatar.value.data
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

const errorCode = (state = "", action) => {
  switch (action.type) {
    case usersActionsTypes.PATCH_USER_REQUEST:
    case usersActionsTypes.PATCH_USER_SUCCESS:
      return "";
    case usersActionsTypes.PATCH_USER_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const usersReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  byId,
  allIds,
  errorCode
});

export default usersReducer;
