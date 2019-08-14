import styled from "styled-components";
import Container from "../../../container";
import { windowDimensions } from "../../../../configurations/window";

const HeaderContainer = styled(Container)`
  ${({ backgroundColor }) => {
    const containerPaddingTop = windowDimensions.getStatusBarHeight();
    const containerHeight = containerPaddingTop + 70;
    const containerBackgroundColor = backgroundColor || "transparent";
    return `
      display: flex;
      position: relative;
      z-index: 4;
      flex-direction: row;
      width: 100%;
      height: ${containerHeight}px;
      min-width: 100%;
      min-height: ${containerHeight}px;
      background-color: ${containerBackgroundColor};
    `;
  }}
`;

export default HeaderContainer;
