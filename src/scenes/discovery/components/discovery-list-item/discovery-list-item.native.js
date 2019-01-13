import styled from "styled-components";
import Link from "../../../../components/link";

const DiscoveryListItem = styled(Link)`
  min-width: 75px;
  height: 75px;
  border-radius: 35px; // !
  margin-right: 30px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default DiscoveryListItem;
