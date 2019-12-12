import styled from "styled-components";
import Container from "../container";

const AppContainer = styled(Container).attrs(() => ({ id: "app-container" }))`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding-left: 80px;
  background-color: ${props => props.theme.backgroundColor};
  transition: filter 0.45s ease-out;
`;

export default AppContainer;
