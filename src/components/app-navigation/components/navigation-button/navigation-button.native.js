import styled from "styled-components";

const NavigationButton = styled.View`
  width: 50px;
  min-height: 50px;
  margin-bottom: 10px;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${props => props.theme.secondaryVariantColor};
`;

export default NavigationButton;
