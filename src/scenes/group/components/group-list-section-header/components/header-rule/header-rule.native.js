import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderRule = styled(Container)`
  width: 100px;
  height: 1px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.secondaryVariantColor};
`;

export default HeaderRule;
