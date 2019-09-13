import { Platform } from "react-native";
import styled from "styled-components";
import Container from "../../../../../container";
import { windowDimensions } from "../../../../../../configurations/window";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 8

const ContainerContentContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 0px;
  z-index: 8;
  flex-direction: column;
  width: 70px;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: ${windowDimensions.getStatusBarHeight() + 10}px;
  ${Platform.OS === "android" ? `
    elevation: 8;
  ` : `
    shadow-offset: 0px 4.8px;
    shadow-radius: 4.32px;
    shadow-color: rgba(0, 0, 0, 1);
    shadow-opacity: 0.192;
  `}
  background-color: ${props => props.theme.primaryColor};
`;

export default ContainerContentContainer;
