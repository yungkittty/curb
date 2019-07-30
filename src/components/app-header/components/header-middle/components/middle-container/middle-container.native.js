import styled from "styled-components";
import Container from "../../../../../container";
import { windowDimensions } from "../../../../../../configurations/window";

const MiddleContainer = styled(Container)`
  ${() => {
    const containerPaddingTop = windowDimensions.getStatusBarHeight();
    return `
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: center;
      align-items: center;
      padding-top: ${containerPaddingTop}px;
    `;
  }}
`;

export default MiddleContainer;
