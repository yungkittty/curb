import styled from "styled-components";
import { isIphoneX } from "react-native-device-detection";
import Container from "../container";

const AppContainer = styled(Container)`
  display: flex;
  flex: 1;
  border-top-width: ${isIphoneX ? 30 : 20}px;
  border-top-style: solid;
  border-top-color: ${props => props.theme.secondaryColor};  
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;
`;

export default AppContainer;
