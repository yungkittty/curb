import styled from "styled-components";
import ButtonImage from "../../../../../../components/button-image";

const ListItemButtonImage = styled(ButtonImage)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default ListItemButtonImage;
