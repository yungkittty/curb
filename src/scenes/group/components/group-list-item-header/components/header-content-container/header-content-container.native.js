import styled from "styled-components";
import Container from "../../../../../../components/container";
import { windowDimensions } from "../../../../../../configurations/window";

const HeaderContentContainer = styled(Container)`
  ${() => {
    // eslint-disable-next-line
    const containerPadding = 40;
    const containerWidth = windowDimensions.getWidth() - containerPadding;
    return `
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      width: 100%;${containerWidth}px;
      height: 300px;
      max-width: ${containerWidth}px;
      max-height: 300px;
      margin: auto;
    `;
  }}
`;

export default HeaderContentContainer;
