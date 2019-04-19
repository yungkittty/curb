import styled from "styled-components";
import Container from "../../../../../container";

const MessageContainer = styled(Container)`
  position: absolute;
  display: flex;
  width: 500px;
  height: 60px;
  border-radius: 32px;
  z-index: 8;
  box-shadow: 0px 6px 8px -2px rgba(51, 51, 51, 0.25);
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
