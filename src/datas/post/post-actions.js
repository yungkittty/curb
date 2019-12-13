import postActionsTypes from "./post-actions-types";

const postActions = {
  getPostListRequest: payload => ({
    type: postActionsTypes.GET_POST_LIST_REQUEST,
    payload
  }),
  getPostListSuccess: payload => ({
    type: postActionsTypes.GET_POST_LIST_SUCCESS,
    payload
  }),
  getPostListFailure: error => ({
    type: postActionsTypes.GET_POST_LIST_FAILURE,
    payload: error,
    error: true
  }),
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
  postPinPostRequest: payload => ({
    type: postActionsTypes.POST_PIN_POST_REQUEST,
    payload
  }),
  postPinPostSuccess: payload => ({
    type: postActionsTypes.POST_PIN_POST_SUCCESS,
    payload
  }),
  postPinPostFailure: error => ({
    type: postActionsTypes.POST_PIN_POST_FAILUREs,
    payload: error,
    error: true
  }),
  postReportPostRequest: payload => ({
    type: postActionsTypes.POST_REPORT_POST_REQUEST,
    payload
  }),
  postReportPostSuccess: payload => ({
    type: postActionsTypes.POST_REPORT_POST_SUCCESS,
    payload
  }),
  postReportPostFailure: error => ({
    type: postActionsTypes.POST_REPORT_POST_FAILURE,
    payload: error,
    error: true
  }),
  deletePostRequest: payload => ({
    type: postActionsTypes.DELETE_POST_REQUEST,
    payload
  }),
  deletePostSuccess: payload => ({
    type: postActionsTypes.DELETE_POST_SUCCESS,
    payload
  }),
  deletePostFailure: error => ({
    type: postActionsTypes.DELETE_POST_FAILURE,
    payload: error,
    error: true
  }),
  postLikePostRequest: payload => ({
    type: postActionsTypes.POST_LIKE_POST_REQUEST,
    payload
  }),
  postLikePostSuccess: payload => ({
    type: postActionsTypes.POST_LIKE_POST_SUCCESS,
    payload
  }),
  postLikePostFailure: error => ({
    type: postActionsTypes.POST_LIKE_POST_FAILURE,
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
  }),
  postMediasRequest: payload => ({
    type: postActionsTypes.POST_MEDIAS_REQUEST,
    payload
  }),
  postMediasSuccess: payload => ({
    type: postActionsTypes.POST_MEDIAS_SUCCESS,
    payload
  }),
  postMediasFailure: error => ({
    type: postActionsTypes.POST_MEDIAS_FAILURE,
    payload: error,
    error: true
  })
};

export default postActions;
