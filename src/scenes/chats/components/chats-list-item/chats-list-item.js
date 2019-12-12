import _ from "lodash";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ImageGroup from "../../../../components/image-group";
import ItemContentContainer from "./components/item-content-container";
import ItemTitle from "./components/item-title";
import ItemMessage from "./components/item-message";
import withChat from "../../../../hocs/with-chat";
import withGroup from "../../../../hocs/with-group";
import { platformBools } from "../../../../configurations/platform";

const ChatsListItem = ({
  // eslint-disable-line
  chatId,
  chatMessages,
  getChat,
  groupId,
  groupName
}) => {
  const chatLastMessage = _.last(chatMessages);

  useEffect(() => {
    const chatInt = setInterval(() => {
      getChat({ id: chatId });
    }, 5000);
    return () => clearTimeout(chatInt);
  }, []);

  return (
    <ItemContainer onClick={`/chats/${chatId}`}>
      {platformBools.isNative ? (
        <ImageGroup
          // eslint-disable-line
          shouldFetch={false}
          groupId={groupId}
          size="small"
          style={{ marginRight: 20 }}
        />
      ) : null}
      <ItemContentContainer>
        <ItemTitle type="h4" weight={700}>
          {/* eslint-disable-line */}
          {groupName}
        </ItemTitle>
        {chatLastMessage ? (
          <ItemMessage
            // eslint-disable-line
            userId={chatLastMessage.userId}
            messageData={chatLastMessage.data}
          />
        ) : null}
      </ItemContentContainer>
    </ItemContainer>
  );
};

ChatsListItem.propTypes = {
  chatId: PropTypes.string.isRequired,
  chatMessages: PropTypes.array.isRequired, // eslint-disable-line
  getChat: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withChat,
  withGroup
])(ChatsListItem);
