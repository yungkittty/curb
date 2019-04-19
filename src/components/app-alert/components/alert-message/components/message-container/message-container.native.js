import styled from "styled-components";
import { Platform } from "react-native";
import { isIphoneX } from "react-native-device-detection";
import Container from "../../../../../container";
import { windowQueries } from "../../../../../../configurations/window";

const MessageContainer = styled(Container)`
  position: absolute;
  display: flex;
  width: 100%;
  height: 50px;
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
