import _ from "lodash";
import React, { useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import ChatContainer from "./components/chat-container";
import ChatList from "./components/chat-list";
import ChatListItem from "./components/chat-list-item";
import ChatInput from "./components/chat-input";
import withCurrentUser from "../../../../hocs/with-current-user";
import withChat from "../../../../hocs/with-chat";
import { platformBools } from "../../../../configurations/platform";

const Chat = ({
  // eslint-disable-line
  currentUserId,
  chatId,
  chatMessages,
  getChat
}) => {
  // eslint-disable-next-line
  useEffect(() => {
    if (platformBools.isMobile) {
      const chatInt = setInterval(() => {
        getChat({ id: chatId });
      }, 5000);
      return () => clearTimeout(chatInt);
    }
  }, []);

  const renderItem = useCallback(
    ({ item: chatMessage }) => (
      <ChatListItem
        // eslint-disable-line
        shouldFetch={false}
        currentUserId={currentUserId}
        groupId={chatId}
        chatMessage={chatMessage}
      />
    ),
    [chatId, currentUserId]
  );

  const chatMessagesReversed = useMemo(
    () =>
      _.chain(chatMessages)
        .slice()
        .reverse()
        .value(),
    [chatMessages]
  );

  return (
    <ChatContainer>
      <ChatList
        // eslint-disable-line
        data={chatMessagesReversed}
        keyExtractor={chatMessage => chatMessage.id}
        renderItem={renderItem}
        inverted
      />
      <ChatInput
        // eslint-disable-line
        shouldFetch={false}
        groupId={chatId}
        currentUserId={currentUserId}
      />
    </ChatContainer>
  );
};

Chat.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
  chatMessages: PropTypes.array.isRequired, // eslint-disable-line
  getChat: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withCurrentUser,
  withChat
])(Chat);
