import chatsActionsTypes from "./chats-actions-types";

const chatsActions = {
  getChatMessagesRequest: payload => ({
    type: chatsActionsTypes.GET_CHAT_MESSAGES_REQUEST,
    payload
  }),
  getChatMessagesSuccess: payload => ({
    type: chatsActionsTypes.GET_CHAT_MESSAGES_SUCCESS,
    payload
  }),
  getChatMessagesFailure: error => ({
    type: chatsActionsTypes.GET_CHAT_MESSAGES_FAILURE,
    payload: error,
    error: true
  }),
  postChatMessageRequest: payload => ({
    type: chatsActionsTypes.POST_CHAT_MESSAGE_REQUEST,
    payload
  }),
  postChatMessageSuccess: payload => ({
    type: chatsActionsTypes.POST_CHAT_MESSAGE_SUCCESS,
    payload
  }),
  postChatMessageFailure: error => ({
    type: chatsActionsTypes.POST_CHAT_MESSAGE_FAILURE,
    payload: error,
    error: true
  })
};

export default chatsActions;
