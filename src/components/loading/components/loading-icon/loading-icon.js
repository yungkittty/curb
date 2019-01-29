import styled, { keyframes } from "styled-components";
import IconContainer from "./components/icon-container";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled(IconContainer)`
  animation: ${rotate} 2s linear infinite;
`;

export default LoadingIcon;
