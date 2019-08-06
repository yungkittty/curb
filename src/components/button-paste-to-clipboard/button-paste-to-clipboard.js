import React from "react";
import PropTypes from "prop-types";
import PasteToClipboard from "./components/paste-to-clipboard";
import ButtonPasteToClipboardContainer from "./components/button-paste-to-clipboard-container";
import Text from "../text";
import Icon from "../icon";

const ButtonPasteToClipboard = ({ color, isPasted, ...others }) => (
  <ButtonPasteToClipboardContainer color={color} {...others}>
    <Text style={{ color: "white" }} weight={700}>
      {isPasted ? "Copied to Clipboard" : "Copy link to Clipboard"}
    </Text>
    <Icon
      style={{ position: "absolute", left: 25 }}
      color="white"
      icon={isPasted ? "check" : "paste"}
      size="extra-small"
    />
  </ButtonPasteToClipboardContainer>
);

ButtonPasteToClipboard.propTypes = {
  color: PropTypes.string.isRequired,
  isPasted: PropTypes.bool.isRequired
};

export default PasteToClipboard(ButtonPasteToClipboard);
