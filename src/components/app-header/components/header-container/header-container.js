import styled from "styled-components";
import Container from "../../../container";

const HeaderContainer = styled(Container)`
  ${({ backgroundColor }) => {
    const headerBackgroundColor = backgroundColor || "transparent";
    return `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 80px;
      min-width: 100%;
      min-height: 80px;
      background-color: ${headerBackgroundColor};
    `;
  }}
`;

export default HeaderContainer;
