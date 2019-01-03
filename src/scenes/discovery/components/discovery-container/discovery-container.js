import styled from "styled-components";
import ContainerScroll from "../../../../components/container-scroll";

const DiscoveryContainer = styled(ContainerScroll).attrs({
  contentContainerStyle: { paddingBottom: 80 }
})`
  // width: 50%;
  padding-left: 80px;
  padding-top: 80px;
  padding-right: 80px;
  // border-right-width: 1px;
  // border-right-style: solid;
  // border-right-color: ${props => props.theme.primaryColor};
`;

export default DiscoveryContainer;
