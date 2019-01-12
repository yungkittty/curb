import styled from "styled-components";
import Container from "../../../container";

const NavigationRule = styled(Container)`
  margin-left: -10px;
  margin-right: -10px;
  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.secondaryVariantColor};
`;

export default NavigationRule;
