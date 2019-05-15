import styled from "styled-components";
import OverlayBlur from "./components/overlay-blur";
import Container from "../../../container";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default OverlayBlur(ModalOverlay);
