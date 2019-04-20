import styled from "styled-components";
import { Animated, Platform } from "react-native";
import { isIphoneX } from "react-native-device-detection";

const MessageContainer = styled(Animated.View)`
  position: absolute;
  display: flex;
  width: 100%;
  elevation: 2;
  height: ${Platform.OS === "ios" ? `${isIphoneX ? 80 : 70}` : 50}px;
  ${Platform.OS === "ios" ? `padding-top: ${isIphoneX ? 30 : 20}px;` : ``}
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
