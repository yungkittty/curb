import styled from "styled-components";
import Container from "../../../../../container";
import { windowDimensions } from "../../../../../../configurations/window";

const ButtonsContainer = styled(Container)`
  ${() => {
    const containerPaddingTop = windowDimensions.getStatusBarHeight() + 10;
    return `
      display: flex;
      position: absolute;
      z-index: 6;
      flex-direction: row;
      height: 100%;
      min-height: 100%;
      padding: 10px;
      padding-top: ${containerPaddingTop}px;
    `;
  }}
`;

export default ButtonsContainer;
