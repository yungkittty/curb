import styled from "styled-components";
import Container from "../container";
import { windowDimensions } from "../../configurations/window";

const AppContainer = styled(Container)`
  width: ${windowDimensions.width};
  height: ${windowDimensions.height};
  background-color: ${props => props.theme.backgroundColor};
`;

export default AppContainer;
