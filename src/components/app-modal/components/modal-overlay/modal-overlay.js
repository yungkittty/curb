import styled from "styled-components";
import Container from "../../../container";
import OverlayBlur from "./components/overlay-blur";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  top: 0px;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
=======
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16
`;

export default OverlayBlur(ModalOverlay);
