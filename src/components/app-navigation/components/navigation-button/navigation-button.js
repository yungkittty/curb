import styled from "styled-components";
import Button from "../../../_button";

const NavigationButton = styled(Button)`
  width: 60px;
  min-height: 60px;
  margin-bottom: 10px;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${props => props.theme.secondaryVariantColor};
`;

export default NavigationButton;
