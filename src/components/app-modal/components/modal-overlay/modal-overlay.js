import styled from "styled-components";
import Container from "../../../container";
import OverlayBlur from "./components/overlay-blur";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  top: 0px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export default OverlayBlur(ModalOverlay);
