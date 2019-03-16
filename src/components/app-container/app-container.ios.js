import { Dimensions } from "react-native";
import styled from "styled-components";
import Container from "../container";
import { windowDimensions } from "../../configurations/window";

const AppContainer = styled(Container)`
  width: 100%;
  height: 100%;
  margin-top: ${Dimensions.get("window").height - windowDimensions.height};
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;
`;

export default AppContainer;
