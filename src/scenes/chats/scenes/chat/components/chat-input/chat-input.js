import _ from "lodash";
import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import InputContainer from "./components/input-container";
import InputContentContainer from "./components/input-content-container";
import InputInput from "./components/input-input";
import InputButtonIcon from "./components/input-button-icon";
import withGroup from "../../../../../../hocs/with-group";

const ChatInput = ({
  // eslint-disable-line
  groupId,
  groupTheme,
  postChatMessage,
  currentUserId,
  theme,
  t
}) => {
  const [chatMessage, setChatMessage] = useState("");

  const handleChange = useCallback(event => {
    setChatMessage(event.target.value);
  }, []);

  const handleSumbit = useCallback(() => {
    postChatMessage({
      id: groupId,
      userId: currentUserId,
      createdAt: new Date().toJSON(),
      data: chatMessage
    });
    setChatMessage("");
  }, [groupId, currentUserId, chatMessage]);

  const getColor = useMemo(() => theme[`group${_.capitalize(groupTheme)}VariantColor`] || "transparent", [groupTheme]);

  return (
    <InputContainer>
      <InputContentContainer>
        <InputInput
          // eslint-disable-line
          radius="extra-small"
          placeholder={t("inputPlaceholder")}
          value={chatMessage}
          onChange={handleChange}
          onEnter={handleSumbit}
          backgroundColor="white"
        />
        <InputButtonIcon
          // eslint-disable-line
          icon="paper-plane"
          size="extra-small"
          color={getColor}
          onClick={handleSumbit}
        />
      </InputContentContainer>
    </InputContainer>
  );
};

ChatInput.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  groupId: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  postChatMessage: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withGroup,
  withTheme,
  withTranslation("chat")
])(ChatInput);
