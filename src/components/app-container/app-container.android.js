import { Dimensions, StatusBar } from "react-native";
import styled from "styled-components";
import Container from "../container";

const AppContainer = styled(Container)`
  width: ${Dimensions.get("window").width}
  height: ${Dimensions.get("window").height - StatusBar.currentHeight}
  backgroundColor: ${props => props.theme.backgroundColor}
`;

export default AppContainer;
