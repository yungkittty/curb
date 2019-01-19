import styled from "styled-components";
import Container from "../container";

const AppContainer = styled(Container)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

export default AppContainer;
