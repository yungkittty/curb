import styled, { withTheme, keyframes } from "styled-components";
import Container from "../../../container";

const ellipsis1 = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const ellipsis2 = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(19px, 0);
  }
`;

const ellipsis3 = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;

const LoaderAnimationRound = styled(Container)`
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${({ theme }) => theme.secondaryVariantColor};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  left: ${({ left }) => left}px;
  animation: ${({ animationNumber }) => {
      switch (animationNumber) {
        case 1:
          return ellipsis1;
        case 2:
          return ellipsis2;
        case 3:
          return ellipsis3;
        default:
          return undefined;
      }
    }}
    0.6s infinite;
`;

export default withTheme(LoaderAnimationRound);
