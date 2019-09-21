import { combineReducers } from "redux";
import mediasActionsTypes from "./medias-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_REQUEST:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_REQUEST:
      return true;
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_FAILURE:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_SUCCESS:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_FAILURE:
      return false;
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
      return "";
    case mediasActionsTypes.POST_MEDIA_AVATAR_USER_FAILURE:
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const mediasReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  errorCode
});

export default mediasReducer;
