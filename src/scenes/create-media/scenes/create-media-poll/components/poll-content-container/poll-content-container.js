import styled from "styled-components";
import ContainerScroll from "../../../../../../components/container-scroll";

const PollContentContainer = styled(ContainerScroll).attrs(()=>({contentContainerStyle: {width: "100%"}}))`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export default PollContentContainer;
