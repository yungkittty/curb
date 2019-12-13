import _ from "lodash";
import { combineReducers } from "redux";
import chatsActionsTypes from "./chats-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case chatsActionsTypes.POST_CHAT_MESSAGE_REQUEST:
      return true;
    case chatsActionsTypes.POST_CHAT_MESSAGE_SUCCESS:
    case chatsActionsTypes.POST_CHAT_MESSAGE_FAILURE:
      return false;
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case chatsActionsTypes.GET_CHAT_MESSAGES_REQUEST: {
      const { id: chatId } = action.payload;
      return {
        ...state,
        [chatId]: {
          ...state[chatId],
          isFetching: true,
          errorCode: ""
        }
      };
    }
    case chatsActionsTypes.GET_CHAT_MESSAGES_SUCCESS: {
      const { id: chatId, messages: chatMessages } = action.payload;
      return {
        ...state,
        [chatId]: {
          ...state[chatId],
          isFetching: false,
          messages: chatMessages
        }
      };
    }
    case chatsActionsTypes.GET_CHAT_MESSAGES_FAILURE: {
      const { id: chatId, messages: chatErrorCode } = action.payload;
      return {
        ...state,
        [chatId]: {
          ...state[chatId],
          isFetching: false,
          errorCode: chatErrorCode
        }
      };
    }
    case chatsActionsTypes.POST_CHAT_MESSAGE_REQUEST: {
      const { id: chatId, ...chatMessage } = action.payload;
      return {
        ...state,
        [chatId]: {
          ...state[chatId],
          messages: [...state[chatId].messages, chatMessage]
        }
      };
    }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case chatsActionsTypes.GET_CHAT_MESSAGES_REQUEST:
      return _.union(state, [action.payload.id]);
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case chatsActionsTypes.POST_CHAT_MESSAGE_REQUEST:
    case chatsActionsTypes.POST_CHAT_MESSAGE_SUCCESS:
      return "";
    case chatsActionsTypes.POST_CHAT_MESSAGE_FAILURE: {
      const { errorCode: chatsErrorCode } = action.payload;
      return chatsErrorCode;
    }
    default:
      return state;
  }
};

const chatsReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  byId,
  allIds,
  errorCode
});

export default chatsReducer;
