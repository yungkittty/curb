import styled from "styled-components";
import ButtonImage from "../../../../../../components/button-image";

// https://facebook.github.io/react-native/docs/image
// https://github.com/facebook/react-native/issues/2468#issuecomment-287399569

const ListItemButtonImage = styled(ButtonImage).attrs({ contentImageStyle: { width: 70, height: 70 } })`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default ListItemButtonImage;
