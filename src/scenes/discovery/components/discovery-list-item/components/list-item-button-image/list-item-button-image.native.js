import styled from "styled-components";
import ButtonImage from "../../../../../../components/button-image";

const ListItemButtonImage = styled(ButtonImage)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default ListItemButtonImage;
