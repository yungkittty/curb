import _ from "lodash";
import { combineReducers } from "redux";
import mediasActionsTypes from "./medias-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_REQUEST:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_REQUEST:
    case mediasActionsTypes.POST_MEDIA_IMAGE_REQUEST:
    case mediasActionsTypes.POST_MEDIA_LOCATION_REQUEST:
    case mediasActionsTypes.POST_MEDIA_TEXT_REQUEST:
    case mediasActionsTypes.POST_MEDIA_VIDEO_REQUEST:
    case mediasActionsTypes.POST_MEDIA_EVENT_REQUEST:
      return true;
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_FAILURE:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_FAILURE:
    case mediasActionsTypes.POST_MEDIA_IMAGE_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_IMAGE_FAILURE:
    case mediasActionsTypes.POST_MEDIA_LOCATION_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_LOCATION_FAILURE:
    case mediasActionsTypes.POST_MEDIA_TEXT_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_TEXT_FAILURE:
    case mediasActionsTypes.POST_MEDIA_VIDEO_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_VIDEO_FAILURE:
    case mediasActionsTypes.POST_MEDIA_EVENT_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_EVENT_FAILURE:
      return false;
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

const errorCode = (state = "", action) => {
  switch (action.type) {
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_REQUEST:
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_REQUEST:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_IMAGE_REQUEST:
    case mediasActionsTypes.POST_MEDIA_IMAGE_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_LOCATION_REQUEST:
    case mediasActionsTypes.POST_MEDIA_LOCATION_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_TEXT_REQUEST:
    case mediasActionsTypes.POST_MEDIA_TEXT_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_VIDEO_REQUEST:
    case mediasActionsTypes.POST_MEDIA_VIDEO_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_EVENT_REQUEST:
    case mediasActionsTypes.POST_MEDIA_EVENT_SUCCESS:
      return "";
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_FAILURE:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_FAILURE:
    case mediasActionsTypes.POST_MEDIA_IMAGE_FAILURE:
    case mediasActionsTypes.POST_MEDIA_LOCATION_FAILURE:
    case mediasActionsTypes.POST_MEDIA_TEXT_FAILURE:
    case mediasActionsTypes.POST_MEDIA_VIDEO_FAILURE:
    case mediasActionsTypes.POST_MEDIA_EVENT_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const mediasReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  byId,
  allIds,
  errorCode
});

export default mediasReducer;
