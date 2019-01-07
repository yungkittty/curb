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
  })
};

export default groupsActions;
