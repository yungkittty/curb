import styled from "styled-components";
import NavigationButtonIcon from "../navigation-button-icon";

const NavigationListFooter = styled(NavigationButtonIcon)`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.secondaryVariantColor};
  background-color: transparent;
`;

export default NavigationListFooter;
