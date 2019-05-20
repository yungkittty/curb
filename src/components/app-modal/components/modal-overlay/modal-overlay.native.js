import styled from "styled-components";
import OverlayBlur from "./components/overlay-blur";
import Container from "../../../container";

const ModalOverlay = styled(Container)`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default OverlayBlur(ModalOverlay);
