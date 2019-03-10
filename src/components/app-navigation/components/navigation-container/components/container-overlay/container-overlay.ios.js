import { Animated } from "react-native";
import styled from "styled-components";

const ContainerOverlay = styled(Animated.View)`
  position: absolute;
  z-index: 6;
  width: 100%;
  height: 100%;
  background-color: black;
`;

export default ContainerOverlay;
