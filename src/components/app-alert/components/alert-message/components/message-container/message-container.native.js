import styled from "styled-components";
import { Animated, Platform } from "react-native";
import { isIphoneX } from "react-native-device-detection";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 8

const MessageContainer = styled(Animated.View)`
  display: flex;
  position: absolute;
  z-index: 8;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${Platform.OS === "ios" ? `${isIphoneX ? 80 : 70}` : 60}px;
  ${Platform.OS === "ios" ? `padding-top: ${isIphoneX ? 30 : 20}px;` : ``}
  ${
    Platform.OS === "android"
      ? `
        elevation: 8;
      `
      : `
        shadow-offset: 0px 4.8px;
        shadow-radius: 4.32px;
        shadow-color: rgba(0, 0, 0, 0.192);
        shadow-opacity: 1;
      `
  }
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
