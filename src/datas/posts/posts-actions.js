import postsActionsTypes from "./posts-actions-types";

const postsActions = {
  getPostsRequest: payload => ({
    type: postsActionsTypes.GET_POSTS_REQUEST,
    payload
  }),
  getPostsSuccess: payload => ({
    type: postsActionsTypes.GET_POSTS_SUCCESS,
    payload
  }),
  getPostsFailure: payload => ({
    type: postsActionsTypes.GET_POSTS_FAILURE,
    payload,
    error: true
  }),
  /* postPostReactionRequest: payload => ({
    type: postsActionsTypes.POST_POST_REACTION_REQUEST,
    payload
  }),
  // !
  postPostReactionSuccess: payload => ({
    type: postsActionsTypes.POST_POST_REACTION_SUCCESS,
    payload
  }),
  // !
  postPostReactionFailure: payload => ({
    type: postsActionsTypes.POST_POST_REACTION_FAILURE,
    payload,
    error: true
  }), */
  deletePostRequest: payload => ({
    type: postsActionsTypes.DELETE_POST_REQUEST,
    payload
  }),
  deletePostSuccess: payload => ({
    type: postsActionsTypes.DELETE_POST_SUCCESS,
    payload
  }),
  deletePostFailure: payload => ({
    type: postsActionsTypes.DELETE_POST_FAILURE,
    payload,
    error: true
  })
};

export default postsActions;
