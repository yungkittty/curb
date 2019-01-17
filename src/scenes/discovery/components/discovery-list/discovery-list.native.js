import styled from "styled-components";
import ListFlat from "../../../../components/list-flat";

const DiscoveryList = styled(ListFlat).attrs(() => ({
  contentContainerStyle: { paddingLeft: 20 }
}))`
  height: 70px;
`;

export default DiscoveryList;
