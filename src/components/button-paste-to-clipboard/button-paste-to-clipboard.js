import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import PasteToClipboard from "./components/paste-to-clipboard";
import Stadium from "../stadium";
import Button from "../button";
import Text from "../text";
import Icon from "../icon";

const ButtonPasteToClipboard = ({ t, style, text, isPasted, ...others }) => (
  <Stadium
    {...others}
    style={{
      ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
      flexDirection: "row"
    }}
    as={Button}
    radius="small"
  >
    <Icon color="white" icon={isPasted ? "check" : "paste"} size="extra-small" />
    <Text style={{ marginLeft: 15, color: "white" }} weight={700}>
      {isPasted ? t("successfullyPastedToClipboard") : text}
    </Text>
  </Stadium>
);

ButtonPasteToClipboard.defaultProps = {
  style: undefined
};

ButtonPasteToClipboard.propTypes = {
  t: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isPasted: PropTypes.bool.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default _.flowRight([
  // eslint-disable-line
  PasteToClipboard,
  withTranslation("common")
])(ButtonPasteToClipboard);
