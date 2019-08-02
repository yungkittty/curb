import styled, { keyframes } from "styled-components";
import CircleContainer from "../../../circle-container";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderCircleContainer = styled(CircleContainer)`
  animation: ${rotateAnimation} 5s linear infinite;
`;

export default LoaderCircleContainer;
