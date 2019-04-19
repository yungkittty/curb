import React from "react";
import PropTypes from "prop-types";
import MessageAnimation from "./components/message-animation";
import MessageContainer from "./components/message-container";
import MessageText from "./components/message-text";

const AlertMessage = ({ type, message, forwardedRef }) => (
  <MessageContainer type={type} ref={forwardedRef}>
    <MessageText>{message}</MessageText>
  </MessageContainer>
);

AlertMessage.propTypes = {
  type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
  message: PropTypes.string.isRequired,
  // eslint-disable-next-line
  forwardedRef: PropTypes.object.isRequired
};

export default MessageAnimation(
  React.forwardRef((props, forwardedRef) => <AlertMessage {...props} forwardedRef={forwardedRef} />)
);
