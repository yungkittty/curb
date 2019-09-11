import styled from "styled-components";
import Container from "../../../../../container";

const FooterContainer = styled(Container)`
  min-height: ${({ cardSize }) => cardSize.footerHeight}px;
  display: flex;
  padding: 20px 24px;
`;

export default FooterContainer;
