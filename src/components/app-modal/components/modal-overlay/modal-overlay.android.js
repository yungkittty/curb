import styled from "styled-components";
import Container from "../../../container";
import OverlayBlur from "./components/overlay-blur";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  top: 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.overlayColor};
  overflow: hidden;
`;

export default OverlayBlur(ModalOverlay);
