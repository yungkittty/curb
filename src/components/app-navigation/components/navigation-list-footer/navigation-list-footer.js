import styled from "styled-components";
import NavigationButton from "../navigation-button";
import { platformBools } from "../../../../configurations/platform";

const NavigationListFooter = styled(NavigationButton)`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.secondaryVariantColor};
  ${platformBools.isReact ? "box-sizing: border-box;" : ""}
`;

export default NavigationListFooter;
