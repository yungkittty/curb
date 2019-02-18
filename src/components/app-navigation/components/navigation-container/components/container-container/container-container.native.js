import { Animated, Dimensions } from "react-native";
import styled from "styled-components";

/** @todo Button are not accesible ! */

const ContainerContainer = styled(Animated.View)`
  position: absolute;
  zIndex: 1;
  width: ${Dimensions.get("window").width + 70}px;
  height: 100%;
`;

export default ContainerContainer;
