import usersActionsTypes from "./users-actions-types";

const usersActions = {
  getUserRequest: payload => ({
    type: usersActionsTypes.GET_USER_REQUEST,
    payload
  }),
  getUserSuccess: payload => ({
    type: usersActionsTypes.GET_USER_SUCCESS,
    payload
  }),
  getUserFailure: error => ({
    type: usersActionsTypes.GET_USER_FAILURE,
    payload: error,
    error: true
  }),
  patchUserRequest: payload => ({
    type: usersActionsTypes.PATCH_USER_REQUEST,
    payload
  }),
  patchUserSuccess: payload => ({
    type: usersActionsTypes.PATCH_USER_SUCCESS,
    payload
  }),
  patchUserError: error => ({
    type: usersActionsTypes.PATCH_USER_FAILURE,
    payload: error,
    error: true
  }),
  postUserAvatarRequest: payload => ({
    type: usersActionsTypes.POST_USER_AVATAR_REQUEST,
    payload
  }),
  postUserAvatarSuccess: payload => ({
    type: usersActionsTypes.POST_USER_AVATAR_SUCCESS,
    payload
  }),
  postUserAvatarError: error => ({
    type: usersActionsTypes.POST_USER_AVATAR_FAILURE,
    payload: error,
    error: true
  })
};

export default usersActions;
