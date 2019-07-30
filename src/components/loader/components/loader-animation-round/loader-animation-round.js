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
  transform-origin: ${({ innerDiameter }) => `${innerDiameter / 2}px ${innerDiameter / 2}px`};
  animation: ${rotateAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  ${({ animationDelay }) => `animation-delay: ${animationDelay}s;`}

  &:after {
    content: " ";
    position: absolute;
    ${({ innerDiameter }) => `width: ${innerDiameter / 10}px;
                              height: ${innerDiameter / 10}px;`}
    border-radius: 50%;
    background: ${({ theme }) => theme.secondaryVariantColor};
    margin: ${({ innerDiameter }) => `-${innerDiameter / 20}px 0 0 -${innerDiameter / 20}px`};
    ${({ innerDiameter, top, left }) => `
      top: ${(top * innerDiameter) / 300}px;
      left: ${(left * innerDiameter) / 300}px;
      `};
  }
`;

export default withTheme(LoaderAnimationRound);
