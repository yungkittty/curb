import styled from "styled-components";
import { isIphoneX } from "react-native-device-detection";
import Container from "../../../container";
import OverlayBlur from "./components/overlay-blur";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  top: 0px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-top-width: ${isIphoneX ? 30 : 20}px;
  border-top-style: solid;
  border-top-color: ${props => props.theme.secondaryColor};  
  background-color: ${props => props.theme.overlayColor};
  overflow: hidden;
`;

export default OverlayBlur(ModalOverlay);
