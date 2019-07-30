import styled from "styled-components";
import OverlayBlur from "./components/overlay-blur";
import Container from "../../../container";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  transition-property: background-color;
  transition-duration: 0.45s;
  transition-timing-function: ease;
`;

export default OverlayBlur(ModalOverlay);
