import styled from "styled-components";
import { isIphoneX } from "react-native-device-detection";
import Container from "../../../container";
import OverlayBlur from "./components/overlay-blur";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-top-width: ${isIphoneX ? 30 : 20}px;
  border-top-color: black;
  background-color: ${props => props.theme.overlayColor};
  overflow: hidden;
`;

export default OverlayBlur(ModalOverlay);
