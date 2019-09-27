import styled from "styled-components";
import OverlayBlur from "./components/overlay-blur";
import Container from "../../../container";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default OverlayBlur(ModalOverlay);
