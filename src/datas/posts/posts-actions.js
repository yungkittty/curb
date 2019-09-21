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
  getPostsFailure: () => ({
    type: postsActionsTypes.GET_POSTS_FAILURE,
    payload: undefined,
    error: true
  })
};

export default postsActions;
