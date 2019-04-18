import { Platform } from "react-native";
import styled from "styled-components";
import { isIphoneX } from "react-native-device-detection";
import Container from "../../../container";
import { windowQueries } from "../../../../configurations/window";

const AlertContainer = styled(Container)`
  display: flex;
  position: absolute;
  top: 0px;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.overlayColor};
`;

export default AlertContainer;
