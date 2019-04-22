import styled from "styled-components";
import { Animated, Platform } from "react-native";
import { isIphoneX } from "react-native-device-detection";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 2

const MessageContainer = styled(Animated.View)`
  position: absolute;
  display: flex;
  width: 100%;
  ${
    Platform.OS === "android"
      ? `elevation: 2;`
      : `
        shadow-offset: 0px 1.2px;
        shadow-radius: 1.08px;
        shadow-color: rgba(0, 0, 0, 0.183);
        shadow-opacity: 1;
        `
  }
  height: ${Platform.OS === "ios" ? `${isIphoneX ? 80 : 70}` : 60}px;
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
