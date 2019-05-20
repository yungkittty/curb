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
  postMediaVideoRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_VIDEO_REQUEST,
    payload
  }),
  postMediaVideoSuccess: payload => ({
    type: mediasActionsTypes.POST_MEDIA_VIDEO_SUCCESS,
    payload
  }),
  postMediaVideoFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_VIDEO_FAILURE,
    payload: error,
    error: true
  }),
  postMediaImageRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_IMAGE_REQUEST,
    payload
  }),
  postMediaImageSuccess: payload => ({
    type: mediasActionsTypes.POST_MEDIA_IMAGE_SUCCESS,
    payload
  }),
  postMediaImageFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_IMAGE_FAILURE,
    payload: error,
    error: true
  }),
  postMediaLocationRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_LOCATION_REQUEST,
    payload
  }),
  postMediaLocationSuccess: payload => ({
    type: mediasActionsTypes.POST_MEDIA_LOCATION_SUCCESS,
    payload
  }),
  postMediaLocationFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_LOCATION_FAILURE,
    payload: error,
    error: true
  })
};

export default mediasActions;
