import _ from "lodash";
import { combineReducers } from "redux";
import groupsActionsTypes from "./groups-actions-types";
import mediasActionsTypes from "../medias/medias-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case groupsActionsTypes.POST_GROUP_REQUEST:
    case groupsActionsTypes.PATCH_GROUP_REQUEST:
    case groupsActionsTypes.DELETE_GROUP_REQUEST:
    case groupsActionsTypes.POST_GROUP_INVITE_TOKEN_REQUEST:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST:
      return true;
    case groupsActionsTypes.POST_GROUP_SUCCESS:
    case groupsActionsTypes.POST_GROUP_FAILURE:
    case groupsActionsTypes.PATCH_GROUP_SUCCESS:
    case groupsActionsTypes.PATCH_GROUP_FAILURE:
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
    case groupsActionsTypes.DELETE_GROUP_FAILURE:
    case groupsActionsTypes.POST_GROUP_INVITE_TOKEN_SUCCESS:
    case groupsActionsTypes.POST_GROUP_INVITE_TOKEN_FAILURE:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_SUCCESS:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_FAILURE:
      return false;
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
          isFetching: true,
          errorCode: ""
        }
      };
    case groupsActionsTypes.GET_GROUP_SUCCESS:
    case groupsActionsTypes.PATCH_GROUP_SUCCESS:
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
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: false,
          errorCode: action.payload.errorCode
        }
      };
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.id]: undefined
      };
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          inviteToken: action.payload.token,
          isFetching: false,
          errorCode: ""
        }
      };
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          avatarUrl: action.payload.avatar.data
        }
      };
    case mediasActionsTypes.POST_MEDIA_IMAGE_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_LOCATION_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_TEXT_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_VIDEO_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          medias: [
            // eslint-disable-line
            action.payload.mediasId,
            ...state[action.payload.id].medias
          ]
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
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case groupsActionsTypes.POST_GROUP_REQUEST:
    case groupsActionsTypes.POST_GROUP_SUCCESS:
    case groupsActionsTypes.PATCH_GROUP_REQUEST:
    case groupsActionsTypes.PATCH_GROUP_SUCCESS:
    case groupsActionsTypes.DELETE_GROUP_REQUEST:
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
    case groupsActionsTypes.POST_GROUP_INVITE_TOKEN_REQUEST:
    case groupsActionsTypes.POST_GROUP_INVITE_TOKEN_SUCCESS:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_SUCCESS:
      return "";
    case groupsActionsTypes.POST_GROUP_FAILURE:
    case groupsActionsTypes.PATCH_GROUP_FAILURE:
    case groupsActionsTypes.DELETE_GROUP_FAILURE:
    case groupsActionsTypes.POST_GROUP_INVITE_TOKEN_FAILURE:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const groupsReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  byId,
  allIds,
  errorCode
});

export default groupsReducer;
