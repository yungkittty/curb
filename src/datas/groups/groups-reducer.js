import _ from "lodash";
import { combineReducers } from "redux";
import groupsActionsTypes from "./groups-actions-types";
import mediasActionsTypes from "../medias/medias-actions-types";
import postActionsTypes from "../post/post-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case groupsActionsTypes.POST_GROUP_REQUEST:
    case groupsActionsTypes.PATCH_GROUP_REQUEST:
    case groupsActionsTypes.DELETE_GROUP_REQUEST:
    case groupsActionsTypes.POST_GROUP_JOIN_REQUEST:
    case groupsActionsTypes.POST_GROUP_UNJOIN_REQUEST:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST:
      return true;
    case groupsActionsTypes.POST_GROUP_SUCCESS:
    case groupsActionsTypes.POST_GROUP_FAILURE:
    case groupsActionsTypes.PATCH_GROUP_SUCCESS:
    case groupsActionsTypes.PATCH_GROUP_FAILURE:
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
    case groupsActionsTypes.DELETE_GROUP_FAILURE:
    case groupsActionsTypes.POST_GROUP_JOIN_SUCCESS:
    case groupsActionsTypes.POST_GROUP_JOIN_FAILURE:
    case groupsActionsTypes.POST_GROUP_UNJOIN_SUCCESS:
    case groupsActionsTypes.POST_GROUP_UNJOIN_FAILURE:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_SUCCESS:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_FAILURE:
      return false;
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case groupsActionsTypes.GET_GROUP_REQUEST:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: true,
          errorCode: ""
        }
      };
    case groupsActionsTypes.GET_GROUP_SUCCESS:
    case groupsActionsTypes.PATCH_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
          isFetching: false,
          errorCode: ""
        }
      };
    case groupsActionsTypes.GET_GROUP_FAILURE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isFetching: false,
          errorCode: action.payload.errorCode
        }
      };
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.id]: undefined
      };
    case groupsActionsTypes.GET_GROUPS_REQUEST:
      return {
        ...state,
        ..._.reduce(
          action.payload.ids,
          // eslint-disable-line
          (groups, groupId) => ({
            // eslint-disable-line
            ...groups,
            [groupId]: {
              // eslint-disable-line
              ...state[groupId],
              isFetching: true,
              errorCode: ""
            }
          }),
          {}
        )
      };
    case groupsActionsTypes.GET_GROUPS_SUCCESS:
      return {
        ...state,
        ..._.reduce(
          action.payload,
          // eslint-disable-line
          (groups, group) => ({
            // eslint-disable-line
            ...groups,
            [group.id]: {
              // eslint-disable-line
              ...state[group.id],
              ...group,
              isFetching: false,
              errorCode: ""
            }
          }),
          {}
        )
      };
    case groupsActionsTypes.GET_GROUPS_FAILURE:
      return {
        ...state,
        ..._.reduce(
          action.payload.ids,
          // eslint-disable-line
          (groups, groupId) => ({
            // eslint-disable-line
            ...groups,
            [groupId]: {
              // eslint-disable-line
              ...state[groupId],
              isFetching: false,
              errorCode: action.payload.errorCode
            }
          }),
          {}
        )
      };
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          inviteToken: action.payload.token,
          isFetching: false,
          errorCode: ""
        }
      };
    case groupsActionsTypes.POST_GROUP_JOIN_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          users: [
            // eslint-disable-line
            ...state[action.payload.id].users,
            action.payload.currentUserId
          ]
        }
      };
    case groupsActionsTypes.POST_GROUP_UNJOIN_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          users: _.without(
            // eslint-disable-line
            state[action.payload.id].users,
            action.payload.currentUserId
          )
        }
      };
    case mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          avatarUrl: action.payload.avatar.data
        }
      };
    case postActionsTypes.GET_POST_LIST_SUCCESS:
      return {
        ...state,
        [action.payload.groupId]: {
          ...state[action.payload.groupId],
          filterdPosts: action.payload.filterdPosts
        }
      };
    case postActionsTypes.POST_POST_SUCCESS:
      return {
        ...state,
        [action.payload.groupId]: {
          ...state[action.payload.groupId],
          filterdPosts: [
            // eslint-disable-line
            ..._.filter(state[action.payload.groupId].filterdPosts, ({ pinned }) => pinned),
            { id: action.payload.postId, pinned: false },
            ..._.filter(state[action.payload.groupId].filterdPosts, ({ pinned }) => !pinned)
          ]
        }
      };
    case postActionsTypes.POST_PIN_POST_SUCCESS:
      return {
        ...state,
        [action.payload.groupId]: {
          ...state[action.payload.groupId],
          filterdPosts: [
            ..._.filter(
              state[action.payload.groupId].filterdPosts,
              ({ id, pinned }) => pinned && id !== action.payload.id
            ),
            {
              ..._.find(state[action.payload.groupId].filterdPosts, ({ id }) => id === action.payload.id),
              pinned: !action.payload.isPinned
            },
            ..._.filter(
              state[action.payload.groupId].filterdPosts,
              ({ id, pinned }) => !pinned && id !== action.payload.id
            )
          ]
        }
      };
    case postActionsTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        [action.payload.groupId]: {
          ...state[action.payload.groupId],
          filterdPosts: _.remove(state[action.payload.groupId].filterdPosts, ({ id }) => id !== action.payload.id)
        }
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case groupsActionsTypes.GET_GROUP_REQUEST:
      return _.union(state, [action.payload.id]);
    case groupsActionsTypes.GET_GROUPS_REQUEST:
      return _.union(state, action.payload.ids);
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
      return _.without(state, action.payload.id);
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case groupsActionsTypes.POST_GROUP_REQUEST:
    case groupsActionsTypes.POST_GROUP_SUCCESS:
    case groupsActionsTypes.PATCH_GROUP_REQUEST:
    case groupsActionsTypes.PATCH_GROUP_SUCCESS:
    case groupsActionsTypes.DELETE_GROUP_REQUEST:
    case groupsActionsTypes.DELETE_GROUP_SUCCESS:
    case groupsActionsTypes.POST_GROUP_JOIN_REQUEST:
    case groupsActionsTypes.POST_GROUP_JOIN_SUCCESS:
    case groupsActionsTypes.POST_GROUP_UNJOIN_REQUEST:
    case groupsActionsTypes.POST_GROUP_UNJOIN_SUCCESS:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_SUCCESS:
      return "";
    case groupsActionsTypes.POST_GROUP_FAILURE:
    case groupsActionsTypes.PATCH_GROUP_FAILURE:
    case groupsActionsTypes.DELETE_GROUP_FAILURE:
    case groupsActionsTypes.POST_GROUP_JOIN_FAILURE:
    case groupsActionsTypes.POST_GROUP_UNJOIN_FAILURE:
    case groupsActionsTypes.GET_GROUP_INVITE_TOKEN_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const groupsReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  byId,
  allIds,
  errorCode
});

export default groupsReducer;
