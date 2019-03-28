import styled from "styled-components";
import { isIphoneX } from "react-native-device-detection";
import Container from "../container";

const AppContainer = styled(Container)`
  display: flex;
  width: 100%;
  height: 100%;
  border-style: solid;
  border-top-width: ${isIphoneX ? 30 : 20}px;
  border-top-color: black;
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;
`;

export default AppContainer;
