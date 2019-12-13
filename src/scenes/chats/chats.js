import _ from "lodash";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import RouteNormalize from "../../components/route-normalize";
import ChatsHeader from "./components/chats-header";
import ChatsContainer from "./components/chats-container";
import ChatsList from "./components/chats-list";
import ChatsListHeader from "./components/chats-list-header";
import ChatsListItem from "./components/chats-list-item";
import Chat from "./scenes/chat";
import withCurrentUser from "../../hocs/with-current-user";
import withChat from "../../hocs/with-chat";
import { platformBools } from "../../configurations/platform";

const Chats = ({
  // eslint-disable-line
  currentUserChatsId: chatsId,
  chatId
}) => {
  const renderListItem = useCallback(
    // eslint-disable-next-line
    ({ item: chatId }) => (
      <ChatsListItem
        // eslint-disable-line
        chatId={chatId}
        groupId={chatId}
      />
    ),
    []
  );

  return (
    <>
      <ChatsHeader
        // eslint-disable-line
        shouldFetch={false}
        groupId={chatId}
      />
      <ChatsContainer>
        {platformBools.isWeb || !chatId ? (
          <ChatsList
            // eslint-disable-line
            data={chatsId}
            // eslint-disable-next-line
            keyExtractor={chatId => chatId}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={platformBools.isWeb ? ChatsListHeader : null}
            renderItem={renderListItem}
            scrollEventThrottle={1}
          />
        ) : null}
        <RouteNormalize path="/chats/:id" component={Chat} />
      </ChatsContainer>
    </>
  );
};

Chats.propTypes = {
  currentUserChatsId: PropTypes.array.isRequired, // eslint-disable-line
  chatId: PropTypes.string.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withCurrentUser,
  withChat
])(Chats);
