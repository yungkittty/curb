import styled from "styled-components";
import ContainerAnimation from "./components/container-animation";
import Container from "../../../container";

const ModalContainer = styled(Container)`
  display: flex;
  position: absolute;
  margin: auto;
  width: 700px;
  height: 740px;
  border-radius: 25px;
  box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.2);
  z-index: 4;
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default ContainerAnimation(ModalContainer);
