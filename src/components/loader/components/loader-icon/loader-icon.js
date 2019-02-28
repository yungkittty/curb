import styled, { keyframes } from "styled-components";
import Icon from "../../../icon";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderIcon = styled(Icon)`
  animation: ${rotate} 2s linear infinite;
`;

export default LoaderIcon;
