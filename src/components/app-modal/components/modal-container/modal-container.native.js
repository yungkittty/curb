import styled from "styled-components";
import { Platform } from "react-native";
import { windowDimensions } from "../../../../configurations/window";
import ContainerAnimation from "./components/container-animation";
import Container from "../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 32

const ModalContainer = styled(Container)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 32;
  ${Platform.OS === "android" ? `
    elevation: 32;
  ` : `
    shadow-offset: 0px 19.2px;
    shadow-radius: 17.28px;
    shadow-color: rgba(0, 0, 0, 1);
    shadow-opacity: 0.228;
  `}
  padding-top: ${windowDimensions.statusBarHeight}px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default ContainerAnimation(ModalContainer);
