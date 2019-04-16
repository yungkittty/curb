import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderRule = styled(Container)`
  width: 200px;
  height: 1px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${props => props.theme.secondaryVariantColor};
`;

export default HeaderRule;
