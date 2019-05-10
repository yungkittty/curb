import styled from "styled-components";
import Container from "../../../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 8

const MessageContainer = styled(Container)`
  display: flex;
  position: absolute;
  z-index: 8;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 32px;
  box-shadow: 0px 4.8px 4.32px 0px rgba(0, 0, 0, 0.192);
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "success":
        return theme.successColor;
      case "error":
        return theme.errorColor;
      case "info":
        return theme.infoColor;
      default:
        return "transparent";
    }
  }};
`;

export default MessageContainer;
