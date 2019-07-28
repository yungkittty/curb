import styled from "styled-components";
import Container from "../../../container";
import { windowDimensions } from "../../../../configurations/window";

const HeaderContainer = styled(Container)`
  ${({ backgroundColor }) => {
    const headerPadding = windowDimensions.getStatusBarHeight();
    const headerHeight = headerPadding + 70;
    const headerBackgroundColor = backgroundColor || "transparent";
    return `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: ${headerHeight}px;
      min-width: 100%;
      min-height: ${headerHeight}px;
      padding-top: ${headerPadding}px;
      background-color: ${headerBackgroundColor};  
    `;
  }}
`;

export default HeaderContainer;
