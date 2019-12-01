import styled from "styled-components";
import Container from "../../../../../container";

const FooterContainer = styled(Container)`
  position: relative;
  min-height: ${({ isCardSmall }) => (isCardSmall ? 86 : 111)}px;
  display: flex;
  flex-flow: row;
  padding: ${({ isCardSmall }) =>
    // eslint-disable-line
    `${isCardSmall ? 10 : 16}px 
    ${isCardSmall ? 10 : 10}px;`}
  background: white;
`;

export default FooterContainer;
