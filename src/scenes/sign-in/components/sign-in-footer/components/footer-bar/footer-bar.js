import styled from "styled-components";
import Container from "../../../../../../components/container";

const FooterBar = styled(Container)`
  width: 1px;
  height: 24px;
  background: ${({ theme }) => theme.primaryColor};
`;

export default FooterBar;
