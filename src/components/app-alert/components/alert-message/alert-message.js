import React from "react";
import MessageAnimation from "./components/message-animation";
import MessageContainer from "./components/message-container";
import MessageText from "./components/message-text";

const AlertMessage = ({ type, message, forwardedRef }) => (
  <MessageContainer type={type} ref={forwardedRef}>
    <MessageText>{message}</MessageText>
  </MessageContainer>
);

export default MessageAnimation(
  React.forwardRef((props, forwardedRef) => <AlertMessage {...props} forwardedRef={forwardedRef} />)
);
