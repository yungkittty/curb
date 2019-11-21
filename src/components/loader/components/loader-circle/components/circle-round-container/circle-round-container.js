import styled, { keyframes } from "styled-components";
import Container from "../../../../../container";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircleRoundContainer = styled(Container)`
  flex: 1;
  animation: ${rotateAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  animation-delay: ${({ index }) => (8 - index) * 36}ms;
`;

export default CircleRoundContainer;
