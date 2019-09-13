import _ from "lodash";
import styled from "styled-components";
import Container from "../../../container";
import OverlayHide from "./components/overlay-hide";
import OverlayBlur from "./components/overlay-blur";

const ModalOverlay = styled(Container)`
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  outline: none;
  transition-property: background-color;
  transition-duration: 0.45s;
  transition-timing-function: ease;
`;

export default _.flowRight([
  // eslint-disable-line
  OverlayHide,
  OverlayBlur
])(ModalOverlay);
