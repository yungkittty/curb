import React from "react";
import HeaderContainer from "./components/header-container";
import Text from "../../../../components/text";

const ChatsListHeader = () => (
  <HeaderContainer>
    <Text type="h3" weight={700}>
      {/* eslint-disable-line */}
      Chats
    </Text>
  </HeaderContainer>
);

export default ChatsListHeader;
