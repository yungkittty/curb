import styled from "styled-components";
import Container from "../container";

const AppContainer = styled(Container).attrs({ id: "app-container" })`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 80px;
  box-sizing: border-box;
`;

export default AppContainer;
