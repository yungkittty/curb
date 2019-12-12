import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ChatInput from "./chat-input";
import { chatsActions } from "../../../../../../datas/chats";

const ChatInputContainer = props => {
  const dispatch = useDispatch();

  const postChatMessage = useCallback(payload => dispatch(chatsActions.postChatMessageRequest(payload)), []);

  return <ChatInput {...props} postChatMessage={postChatMessage} />;
};

export default ChatInputContainer;
