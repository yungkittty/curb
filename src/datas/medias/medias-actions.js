import mediasActionsTypes from "./medias-actions-types";

const mediasActions = {
  getMediaRequest: payload => ({
    type: mediasActionsTypes.GET_MEDIA_REQUEST,
    payload
  }),
  getMediaSuccess: payload => ({
    type: mediasActionsTypes.GET_MEDIA_SUCCESS,
    payload
  }),
  getMediaFailure: error => ({
    type: mediasActionsTypes.GET_MEDIA_FAILURE,
    payload: error,
    error: true
  }),
  postMediaAvatarUserRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_USER_REQUEST,
    payload
  }),
  postMediaAvatarUserSuccess: payload => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_USER_SUCCESS,
    payload
  }),
  postMediaAvatarUserFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_USER_FAILURE,
    payload: error,
    error: true
  }),
  postMediaAvatarGroupRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_REQUEST,
    payload
  }),
  postMediaAvatarGroupSuccess: payload => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_SUCCESS,
    payload
  }),
  postMediaAvatarGroupFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_FAILURE,
    payload: error,
    error: true
  }),
  postMediaEventJoinRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_EVENT_JOIN_REQUEST,
    payload
  }),
  postMediaEventJoinSuccess: payload => ({
    type: mediasActionsTypes.POST_MEDIA_EVENT_JOIN_SUCCESS,
    payload
  }),
  postMediaEventJoinFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_EVENT_JOIN_FAILURE,
    payload: error,
    error: true
  }),
  postMediaEventLeaveRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_EVENT_LEAVE_REQUEST,
    payload
  }),
  postMediaEventLeaveSuccess: payload => ({
    type: mediasActionsTypes.POST_MEDIA_EVENT_LEAVE_SUCCESS,
    payload
  }),
  postMediaEventLeaveFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_EVENT_LEAVE_FAILURE,
    payload: error,
    error: true
  })
};

export default mediasActions;
