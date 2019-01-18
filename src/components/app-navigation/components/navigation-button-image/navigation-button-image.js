import styled from "styled-components";
import ButtonImage from "../../../button-image";

// https://facebook.github.io/react-native/docs/image
// https://github.com/facebook/react-native/issues/2468#issuecomment-287399569

const NavigationButtonImage = styled(ButtonImage)`
  width: 60px;
  height: 60px;
  min-height: 60px;
  margin-bottom: 10px;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${props => props.theme.secondaryVariantColor};
`;

export default NavigationButtonImage;
