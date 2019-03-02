import { Animated } from "react-native";
import styled from "styled-components";

const ContainerOverlay = styled(Animated.View)`
  position: absolute;
  zIndex: 6;
  width: 100%;
  height: 100%;
  elevation: 6;
  background-color: black;
`;

export default ContainerOverlay;
