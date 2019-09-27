import styled from "styled-components";
import Container from "../../../../../../components/container";
import { windowDimensions } from "../../../../../../configurations/window";

const HeaderContainer = styled(Container)`
  ${() => {
    const containerPaddingTop = windowDimensions.getStatusBarHeight() + 20;
    return `
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: ${containerPaddingTop}px;
    `;
  }}
`;

export default HeaderContainer;
