import React from "react";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ItemInfos from "./components/item-infos";
import ItemContent from "./components/item-content";
import withGroup from "../../../../../../hocs/with-group";

const ChatListItem = ({
  // eslint-disable-line
  currentUserId,
  chatMessage,
  groupTheme
}) => {
  const {
    // eslint-disable-line
    userId: messageUserId,
    data: messageData,
    createdAt: messageCreatedAt
  } = chatMessage;

  const inverted = currentUserId === messageUserId;

  return (
    <ItemContainer inverted={inverted}>
      <ItemInfos
        // eslint-disable-line
        userId={messageUserId}
        messageCreatedAt={messageCreatedAt}
        inverted={inverted}
      />
      <ItemContent
        // eslint-disable-line
        messageData={messageData}
        groupTheme={groupTheme}
        inverted={inverted}
      />
    </ItemContainer>
  );
};

ChatListItem.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  chatMessage: PropTypes.object.isRequired, // eslint-disable-line
  groupTheme: PropTypes.string.isRequired
};

export default withGroup(ChatListItem);
