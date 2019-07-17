import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderRule = styled(Container)`
  width: 150px;
  height: 1px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.secondaryVariantColor};
`;

export default HeaderRule;
