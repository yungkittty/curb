import styled from "styled-components";
import Container from "../../../../../container";

const MessageContainer = styled(Container)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "success":
        return theme.successColor;
      case "error":
        return theme.errorColor;
      case "info":
        return theme.infoColor;
      default:
        return theme.infoColor;
    }
  }};
`;

export default MessageContainer;
