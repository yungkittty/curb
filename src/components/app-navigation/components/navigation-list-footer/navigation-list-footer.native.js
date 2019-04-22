import styled from "styled-components";
import NavigationButton from "../navigation-button";

const NavigationListFooter = styled(NavigationButton)`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.secondaryVariantColor};
  background-color: transparent;
`;

export default NavigationListFooter;
