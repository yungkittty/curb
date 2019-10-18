import styled from "styled-components";
import Container from "../../../../../container";

const FooterContainer = styled(Container)`
  position: relative;
  min-height: ${({ cardSize }) => cardSize.footerHeight}px;
  display: flex;
  flex-flow: row;
  padding: 12px 14px;
  background: white;
`;

export default FooterContainer;
