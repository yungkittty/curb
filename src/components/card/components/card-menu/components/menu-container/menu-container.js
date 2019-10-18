import styled from "styled-components";
import ContainerScroll from "../../../../../container-scroll";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 6

const MenuContainer = styled(ContainerScroll)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(255, 255, 255, 1);
  z-index: 2;
`;

export default MenuContainer;
