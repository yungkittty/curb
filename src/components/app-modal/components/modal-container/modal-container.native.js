import styled from "styled-components";
import Container from "../../../container";
import ContainerAnimation from "./components/container-animation";
import { platformBools } from "../../../../configurations/platform";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 32

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  z-index: 32;
  width: 100%;
  height: 100%;
  ${
    platformBools.isAndroid
      ? `
    elevation: 32;
  `
      : `
    shadow-offset: 0px 19.2px;
    shadow-radius: 17.28px;
    shadow-color: rgba(0, 0, 0, 1);
    shadow-opacity: 0.228;
  `
  }
  padding-top: ${windowDimensions.getStatusBarHeight()}px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default ContainerAnimation(ModalContainer);
