import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import MessageAnimation from "./components/message-animation";
import MessageContainer from "./components/message-container";
import MessageIcon from "./components/message-icon";
import MessageText from "./components/message-text";

const AlertMessage = ({ t, forwardedRef, style, type, message, icon }) => (
  <MessageContainer style={style} type={type} ref={forwardedRef}>
    {icon && <MessageIcon icon={icon} />}
    <MessageText weight={600}>{t(message)}</MessageText>
  </MessageContainer>
);

AlertMessage.defaultProps = {
  forwardedRef: undefined,
  icon: undefined
};

AlertMessage.propTypes = {
  t: PropTypes.func.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object,
  type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.string,
  // eslint-disable-next-line
  forwardedRef: PropTypes.object
};

export default _.flow([
  // eslint-disable-line
  withTranslation("appAlert"),
  MessageAnimation
])(AlertMessage);
