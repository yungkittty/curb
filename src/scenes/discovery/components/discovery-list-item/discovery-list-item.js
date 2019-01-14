import styled from "styled-components";
import ButtonImage from "../../../../components/button-image";

const DiscoveryListItem = styled(ButtonImage)`
  min-width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 50px; // ! => .native.js
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default DiscoveryListItem;
