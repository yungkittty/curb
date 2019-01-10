import styled from "styled-components";
import ContainerScroll from "../../../../components/container-scroll";

const DiscoveryContainer = styled(ContainerScroll).attrs(() => ({
  contentContainerStyle: { paddingBottom: 40 }
}))`
  padding-left: 80px;
  padding-top: 80px;
  padding-right: 80px;
`;

export default DiscoveryContainer;
