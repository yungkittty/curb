import styled from "styled-components";
import Container from "../../../container";
import ContainerAnimation from "./components/container-animation";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 32

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  z-index: 32;
  width: 700px;
  height: 740px;
  border-radius: 25px;
  box-shadow: 0px 19.2px 17.28px 0px rgba(0, 0, 0, 0.228);
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default ContainerAnimation(ModalContainer);
