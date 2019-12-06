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
  })
};

export default mediasActions;
