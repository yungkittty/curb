import styled from "styled-components";
import ContainerAnimation from "./components/container-animation";
import Container from "../../../container";

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default ContainerAnimation(ModalContainer);
