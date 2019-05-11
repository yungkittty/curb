import _ from "lodash";
import { combineReducers } from "redux";
import usersActionsTypes from "./users-actions-types";
import { groupsActionsTypes } from "../groups";
import { mediasActionsTypes } from "../medias";

const initialState = { isFetching: false, errorCode: "" };

const patchingUser = (state = initialState, action) => {
  switch (action.type) {
    case usersActionsTypes.PATCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case usersActionsTypes.PATCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorCode: ""
      };
    case usersActionsTypes.PATCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorCode: action.payload.response.data.code
      };
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
        [action.payload.config.data.id]: {
          ...state[action.payload.config.data.id],
          isFetching: true,
          errorCode: action.payload.response.data.code
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

const usersReducer = combineReducers({ patchingUser, byId, allIds });

export default usersReducer;
