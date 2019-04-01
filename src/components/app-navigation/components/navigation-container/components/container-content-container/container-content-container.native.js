import { Platform } from "react-native";
import styled from "styled-components";
import { isIphoneX } from "react-native-device-detection";
import Container from "../../../../../container";

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
  ${Platform.OS === "android" ? `
    padding-top: 10px;
    elevation: 8;
  ` : `
    padding-top: ${(isIphoneX ? 30 : 20) + 10}px;
    shadow-offset: 0px 4.8px;
    shadow-radius: 4.32px;
    shadow-color: rgba(0, 0, 0, 0.192);
    shadow-opacity: 1;
  `}
  background-color: ${props => props.theme.primaryColor};
`;

export default ContainerContentContainer;
