import groupsActionsTypes from "./groups-actions-types";

const groupsActions = {
  postGroupRequest: payload => ({
    type: groupsActionsTypes.POST_GROUP_REQUEST,
    payload
  }),
  postGroupSuccess: payload => ({
    type: groupsActionsTypes.POST_GROUP_SUCCESS,
    payload
  }),
  postGroupFailure: error => ({
    type: groupsActionsTypes.POST_GROUP_FAILURE,
    payload: error,
    error: true
  }),
  deleteGroupRequest: payload => ({
    type: groupsActionsTypes.DELETE_GROUP_REQUEST,
    payload
  }),
  deleteGroupSuccess: payload => ({
    type: groupsActionsTypes.DELETE_GROUP_SUCCESS,
    payload
  }),
  deleteGroupFailure: error => ({
    type: groupsActionsTypes.DELETE_GROUP_FAILURE,
    payload: error,
    error: true
  }),
  patchGroupRequest: payload => ({
    type: groupsActionsTypes.PATCH_GROUP_REQUEST,
    payload
  }),
  patchGroupSuccess: payload => ({
    type: groupsActionsTypes.PATCH_GROUP_SUCCESS,
    payload
  }),
  patchGroupFailure: error => ({
    type: groupsActionsTypes.PATCH_GROUP_FAILURE,
    payload: error,
    error: true
  }),
  getGroupRequest: payload => ({
    type: groupsActionsTypes.GET_GROUP_REQUEST,
    payload
  }),
  getGroupSuccess: payload => ({
    type: groupsActionsTypes.GET_GROUP_SUCCESS,
    payload
  }),
  getGroupFailure: error => ({
    type: groupsActionsTypes.GET_GROUP_FAILURE,
    payload: error,
    error: true
  }),
  getGroupInviteTokenRequest: payload => ({
    type: groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST,
    payload
  }),
  getGroupInviteTokenSuccess: payload => ({
    type: groupsActionsTypes.GET_GROUP_INVITE_TOKEN_SUCCESS,
    payload
  }),
  getGroupInviteTokenFailure: error => ({
    type: groupsActionsTypes.GET_GROUP_INVITE_TOKEN_FAILURE,
    payload: error,
    error: true
  })
};

export default groupsActions;
