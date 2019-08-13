import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderContentContainer = styled(Container)`
  ${() => {
    // eslint-disable-next-line
    const containerPadding = 1180;
    const containerWidth = 1920 - containerPadding;
    return `
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      width: ${containerWidth}px;
      height: 100%;
      max-width: ${containerWidth}px;
      max-height: 100%;
      margin-right: auto;
    `;
  }}
`;

export default HeaderContentContainer;
