import styled from "styled-components";
import ButtonIcon from "../../../button-icon";

const NavigationButtonIcon = styled(ButtonIcon)`
  width: 60px;
  min-height: 60px;
  margin-bottom: 10px;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${props => props.theme.secondaryVariantColor};
`;

export default NavigationButtonIcon;
