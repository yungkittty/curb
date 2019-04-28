import React from "react";
import PropTypes from "prop-types";
import MessageAnimation from "./components/message-animation";
import MessageContainer from "./components/message-container";
import MessageIcon from "./components/message-icon";
import MessageText from "./components/message-text";

const AlertMessage = ({ forwardedRef, style, type, message, icon }) => (
  <MessageContainer style={style} type={type} ref={forwardedRef}>
    {icon && <MessageIcon icon={icon} />}
    <MessageText weight={600}>{message}</MessageText>
  </MessageContainer>
);

AlertMessage.defaultProps = {
  forwardedRef: undefined,
  icon: undefined
};

AlertMessage.propTypes = {
  // eslint-disable-next-line
  style: PropTypes.object,
  type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.string,
  // eslint-disable-next-line
  forwardedRef: PropTypes.object
};

export default MessageAnimation(AlertMessage);
