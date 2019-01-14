import styled from "styled-components";
import ButtonImage from "../../../../components/button-image";

const DiscoveryListItem = styled(ButtonImage)`
  min-width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 35px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default DiscoveryListItem;
