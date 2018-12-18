import styled from "styled-components";
import Container from "../../../../../container";

const ModalContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  width: 700px;
  height: 740px;
  max-height: 100%;
  border-radius: 25px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default ModalContainer;
