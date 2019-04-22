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
  postMediaUserAvatarRequest: payload => ({
    type: mediasActionsTypes.POST_MEDIA_USER_AVATAR_REQUEST,
    payload
  }),
  postMediaUserAvatarSuccess: payload => ({
    type: mediasActionsTypes.POST_MEDIA_USER_AVATAR_SUCCESS,
    payload
  }),
  postMediaUserAvatarFailure: error => ({
    type: mediasActionsTypes.POST_MEDIA_USER_AVATAR_FAILURE,
    payload: error,
    error: true
  })
};

export default mediasActions;
