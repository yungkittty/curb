import styled from "styled-components";
import Container from "../../../container";

const AlertMessage = styled(Container)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: white;
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
