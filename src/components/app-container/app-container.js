import styled from "styled-components";
import Container from "../container";

const AppContainer = styled(Container).attrs({ id: "app-container" })`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 80px;
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;
`;

export default AppContainer;
