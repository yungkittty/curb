import styled from "styled-components";
import ButtonImage from "../../../../../../components/button-image";

// https://facebook.github.io/react-native/docs/image
// https://github.com/facebook/react-native/issues/2468#issuecomment-287399569

const ListItemButtonImage = styled(ButtonImage)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default ListItemButtonImage;
