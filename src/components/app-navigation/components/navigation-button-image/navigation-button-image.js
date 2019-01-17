import styled from "styled-components";
import NavigationButton from "../navigation-button";
import ButtonImage from "../../../button-image";

// https://facebook.github.io/react-native/docs/image
// https://github.com/facebook/react-native/issues/2468#issuecomment-287399569

const NavigationButtonImage = styled(NavigationButton).attrs(() => ({
  as: ButtonImage
}))`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export default NavigationButtonImage;
