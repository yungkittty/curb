/* eslint-disable */

import _ from "lodash";
import { combineReducers } from "redux";
import postsActionsTypes from "./posts-actions-types";

/* {
  isFetching: <boolean>,
  byGroupId: {
    [groupId]: {
      isEnd: <boolean>,
      isFetching: <boolean>,
      byId: { [postId]: <object> },
      allIds: <array>,
      errorCode: <string>
  }},
  errorCode: <string>
} */

const isFetching = (state = false, action) => false;

const byId = (state = {}, action) => {
  switch (action.type) {
    case postsActionsTypes.GET_POSTS_SUCCESS:
      return {
        ...(action.payload.page !== 1 ? state : {}),
        ..._.reduce(
          action.payload.data,
          // eslint-disable-line
          (postsById, post) => ({ ...postsById, [post.id]: post }),
          {}
        )
      };
    case postsActionsTypes.DELETE_POST_SUCCESS:
      return { ...state, [action.payload.postId]: undefined };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case postsActionsTypes.GET_POSTS_SUCCESS:
      return [
        ...(action.payload.page !== 1 ? state : []),
        ..._.reduce(
          action.payload.data,
          // eslint-disable-line
          (allPostsIds, post) => [...allPostsIds, post.id],
          []
        )
      ];
    case postsActionsTypes.DELETE_POST_SUCCESS:
      return _.without(state, action.payload.postId);
    default:
      return state;
  }
};

const byGroupId = (state = {}, action) => {
  switch (action.type) {
    case postsActionsTypes.GET_POSTS_REQUEST:
      return {
        ...state,
        [action.payload.groupId]: {
          ...state[action.payload.groupId],
          isEnd: true,
          isFetching: true,
          errorCode: ""
        }
      };
    case postsActionsTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        [action.payload.groupId]: {
          ...state[action.payload.groupId],
          isEnd: action.payload.data !== [],
          isFetching: false,
          byId: byId(state[action.payload.groupId].byId, action),
          allIds: allIds(state[action.payload.groupId].allIds, action),
          errorCode: ""
        }
      };
    case postsActionsTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        [action.payload.groupId]: {
          ...state[action.payload.groupId],
          isEnd: true,
          isFetching: false,
          errorCode: action.payload.errorCode
        }
      };
    default:
      return state;
  }
};

const errorCode = (state = "", action) => "";

const postsReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  byGroupId,
  errorCode
});

export default postsReducer;
