/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import MessageContainer from "./components/message-container";
import ImageUser from "../../../../../../components/image-user";
import MessageTitle from "./components/message-title";
import MessageSubtitle from "./components/message-subtitle";
import withUser from "../../../../../../hocs/with-user";

const ItemMessage = ({
  // eslint-disable-line
  userId,
  userName,
  messageData
}) => (
  <MessageContainer>
    <ImageUser
      // eslint-disable-line
      shouldFetch={false}
      userId={userId}
      size="extra-extra-extra-small"
      style={{ marginRight: 5 }}
    />
    <MessageTitle type="h5" weight={700}>
      {/* eslint-disable-line */}
      {userName}
    </MessageTitle>
    <MessageSubtitle type="h5">
      {/* eslint-disable-line */}
      {messageData}
    </MessageSubtitle>
  </MessageContainer>
);

ItemMessage.propTypes = {};

export default withUser(ItemMessage);
