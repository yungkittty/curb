import styled from "styled-components";
import Container from "../container";

const AppContainer = styled(Container).attrs({ id: "app-container" })`
  width: 100vw;
  height: 100vh;
  padding-left: 80px;
  background-color: ${props => props.theme.backgroundColor};
  overflow: auto;
`;

export default AppContainer;
