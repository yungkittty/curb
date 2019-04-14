import styled from "styled-components";
import Container from "../../../container";

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 700px;
  min-width: 700px;
  height: 740px;
  min-height: 740px;
  border-radius: 25px;
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;
`;

export default ModalContainer;
