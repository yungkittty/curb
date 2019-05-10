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
  postMediaAvatarRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_REQUEST,
    payload
  }),
  postMediaAvatarSuccess: () => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_SUCCESS,
    payload: undefined
  }),
  postMediaAvatarFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_AVATAR_FAILURE,
    payload: error,
    error: true
  }),
  postGroupVideoContentRequest: payload => ({
    type: mediasActionsTypes.POST_GROUP_VIDEO_CONTENT_REQUEST,
    payload
  }),
  postGroupVideoContentSuccess: () => ({
    type: mediasActionsTypes.POST_GROUP_VIDEO_CONTENT_SUCCESS,
    payload: undefined
  }),
  postGroupVideoContentFailure: error => ({
    type: mediasActionsTypes.POST_GROUP_VIDEO_CONTENT_FAILURE,
    payload: error,
    error: true
  })
};

export default mediasActions;
