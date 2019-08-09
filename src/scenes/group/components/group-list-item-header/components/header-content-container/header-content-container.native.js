import styled from "styled-components";
import Container from "../../../../../../components/container";
import { windowDimensions } from "../../../../../../configurations/window";

const HeaderContentContainer = styled(Container)`
  ${() => {
    const containerMaxWidth = windowDimensions.getWidth() - 40;
    return `
      display: flex;
      position: relative;
      flex-grow: 1;
      flex-shrink: 1;
      flex-direction: column;
      align-items: center;
      max-width: ${containerMaxWidth}px;
    `;
  }}
`;

export default HeaderContentContainer;
