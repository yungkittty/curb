import styled from "styled-components";
import Container from "../container";

const AppContainer = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;
`;

export default AppContainer;
