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
  postGroupInviteTokenRequest: payload => ({
    type: groupsActionsTypes.POST_GROUP_INVITE_TOKEN_REQUEST,
    payload
  }),
  postGroupInviteTokenSuccess: payload => ({
    type: groupsActionsTypes.POST_GROUP_INVITE_TOKEN_SUCCESS,
    payload
  }),
  postGroupInviteTokenFailure: error => ({
    type: groupsActionsTypes.POST_GROUP_INVITE_TOKEN_FAILURE,
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
