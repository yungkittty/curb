import styled, { withTheme, keyframes } from "styled-components";
import Container from "../../../container";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderAnimationRound = styled(Container)`
  transform-origin: 40px 40px;
  animation: ${rotateAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  ${({ roundConfig: { animationDelay } }) => `animation-delay: ${animationDelay}s;`}

  &:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.secondaryVariantColor};
    margin: -4px 0 0 -4px;
    ${({ roundConfig: { top, left } }) => `
      top: ${top}px;
      left: ${left}px;
      `}
  }
`;

export default withTheme(LoaderAnimationRound);
