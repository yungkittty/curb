import styled from "styled-components";
import NavigationLinkIcon from "../navigation-link-icon";

const NavigationListFooter = styled(NavigationLinkIcon)`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.secondaryVariantColor};
  background-color: transparent;
`;

export default NavigationListFooter;
