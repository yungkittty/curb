import styled from "styled-components";
import Link from "../../../../components/link";

const DiscoveryListItem = styled(Link)`
  min-width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-right: 40px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default DiscoveryListItem;
