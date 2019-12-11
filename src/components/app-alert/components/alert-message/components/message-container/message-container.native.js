import styled from "styled-components";
import { Animated, Platform } from "react-native";
import { windowDimensions } from "../../../../../../configurations/window";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 8

const MessageContainer = styled(Animated.View)`
  display: flex;
  flex-flow: row;
  position: absolute;
  z-index: 8;
  align-items: center;
  width: 100%;
  height: ${windowDimensions.getStatusBarHeight() + 50}px;
  padding-top: ${windowDimensions.getStatusBarHeight()}px;
  ${Platform.OS === "android" ? `
    elevation: 8;
  ` : `
    shadow-offset: 0px 4.8px;
    shadow-radius: 4.32px;
    shadow-color: rgba(0, 0, 0, 1);
    shadow-opacity: 0.192;
  `}
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
