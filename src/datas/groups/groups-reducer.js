import _ from "lodash";
import { combineReducers } from "redux";
import groupsActionsTypes from "./groups-actions-types";
import { mediasActionsTypes } from "../medias";

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
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST:
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
    case groupsActionsTypes.GET_GROUP_FAILURE:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_FAILURE:
      return {
        ...state,
        [action.payload.config.data.id]: {
          ...state[action.payload.config.data.id],
          isFetching: false,
          errorCode: action.payload.response.data.code
        }
      };
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          avatarUrl: action.payload.avatar.value.data
        }
      };
    case mediasActionsTypes.POST_MEDIA_VIDEO_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          medias: [...state[action.payload.id].medias, action.payload.mediasId],
          isFetching: false,
          errorCode: ""
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
