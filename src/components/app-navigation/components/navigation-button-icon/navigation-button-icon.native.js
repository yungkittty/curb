import styled from "styled-components";
import ButtonIcon from "../../../button-icon";

const NavigationButtonIcon = styled(ButtonIcon)`
  width: 50px;
  min-height: 50px;
  margin-bottom: 10px;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${props => props.theme.secondaryVariantColor};
`;

export default NavigationButtonIcon;
