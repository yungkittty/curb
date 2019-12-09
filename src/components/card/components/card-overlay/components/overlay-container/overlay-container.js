import styled from "styled-components";
import Container from "../../../../../container";
import ContainerScroll from "../../../../../container-scroll";

const OverlayContainer = styled(Container).attrs(({ isMenu }) => ({
  as: isMenu ? ContainerScroll : undefined
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: white;
  z-index: 2;
`;

export default OverlayContainer;
