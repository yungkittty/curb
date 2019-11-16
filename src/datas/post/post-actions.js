import postActionsTypes from "./post-actions-types";

const postActions = {
  getPostRequest: payload => ({
    type: postActionsTypes.GET_POST_REQUEST,
    payload
  }),
  getPostSuccess: payload => ({
    type: postActionsTypes.GET_POST_SUCCESS,
    payload
  }),
  getPostFailure: error => ({
    type: postActionsTypes.GET_POST_FAILURE,
    payload: error,
    error: true
  }),
  postPostRequest: payload => ({
    type: postActionsTypes.POST_POST_REQUEST,
    payload
  }),
  postPostSuccess: payload => ({
    type: postActionsTypes.POST_POST_SUCCESS,
    payload
  }),
  postPostFailure: error => ({
    type: postActionsTypes.POST_POST_FAILURE,
    payload: error,
    error: true
  })
};

export default postActions;
