import styled from "styled-components";
import NavigationLinkIcon from "../navigation-link-icon";

const NavigationListFooter = styled(NavigationLinkIcon)`
  border-width: 0.5px;
  border-style: solid;
  border-color: ${props => props.theme.secondaryVariantColor};
  box-sizing: border-box;
  background-color: transparent;
`;

export default NavigationListFooter;
