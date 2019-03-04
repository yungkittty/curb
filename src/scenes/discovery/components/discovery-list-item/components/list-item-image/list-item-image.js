import styled from "styled-components";
import Image from "../../../../../../components/image";

// https://facebook.github.io/react-native/docs/image
// https://github.com/facebook/react-native/issues/2468#issuecomment-287399569

const ListItemImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default ListItemImage;
