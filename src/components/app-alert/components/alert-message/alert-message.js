import styled from "styled-components";
import Container from "../../../container";

const AlertMessage = styled(Container)`
  display: flex;
  width: 100%;
  height: 64px;
  border-radius: 32px;
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
        return theme.infoColor;
    }
  }};
`;

export default AlertMessage;
