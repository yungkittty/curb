import styled from "styled-components";
import Container from "../../../../../container";

const FooterContainer = styled(Container)`
  position: relative;
  min-height: ${({ isCardSmall }) => (isCardSmall ? 120 : 138)}px;
  display: flex;
  flex-flow: row;
  padding: ${({ isCardSmall }) =>
    // eslint-disable-line
    `${isCardSmall ? 15 : 24}px 
    ${isCardSmall ? 18 : 26}px;`}
  background: white;
`;

export default FooterContainer;
