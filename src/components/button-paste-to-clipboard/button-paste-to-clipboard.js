import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import PasteToClipboard from "./components/paste-to-clipboard";
import ButtonPasteToClipboardContainer from "./components/button-paste-to-clipboard-container";
import Text from "../text";
import Icon from "../icon";

const ButtonPasteToClipboard = ({ t, color, text, isPasted, ...others }) => (
  <ButtonPasteToClipboardContainer color={color} {...others}>
    <Text style={{ color: "white" }} weight={700}>
      {isPasted ? t("successfullyPastedToClipboard") : text}
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
  t: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isPasted: PropTypes.bool.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  PasteToClipboard,
  withTranslation("common")
])(ButtonPasteToClipboard);
