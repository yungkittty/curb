import styled from "styled-components";
import Card from "../../../../components/card";
import withGroup from "../../../../hocs/with-group";

const DiscoveryListItem = styled(Card)`
  margin-right: 25px;
`;

export default withGroup(DiscoveryListItem);
