import { Dimensions } from "react-native";
import styled from "styled-components";
import Container from "../../../container";
import OverlayBlur from "./components/overlay-blur";
import { windowDimensions } from "../../../../configurations/window";

const ModalOverlay = styled(Container)`
  display: flex;
  position: absolute;
  top: 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: ${Dimensions.get("window").height - windowDimensions.height};
  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export default OverlayBlur(ModalOverlay);
