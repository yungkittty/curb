import styled from "styled-components";
import ButtonImage from "../../../button-image";

// https://facebook.github.io/react-native/docs/image
// https://github.com/facebook/react-native/issues/2468#issuecomment-287399569

const NavigationButtonImage = styled(ButtonImage).attrs({
  contentImageStyle: { width: 50, height: 50 }
})`
  width: 50px;
  height: 50px;
  min-height: 50px;
  margin-bottom: 10px;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${props => props.theme.secondaryVariantColor};
`;

export default NavigationButtonImage;
