import styled from "styled-components";
import Container from "../../../../../container";

const ContainerContentContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 0px;
  zIndex: 6;
  flex-direction: column;
  width: 70px;
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  elevation: 6;
  background-color: ${props => props.theme.primaryColor};
`;

export default ContainerContentContainer;
