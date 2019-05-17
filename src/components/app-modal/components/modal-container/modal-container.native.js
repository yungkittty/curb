import styled from "styled-components";
import { Platform } from "react-native";
import { isIphoneX } from "react-native-device-detection";
import ContainerAnimation from "./components/container-animation";
import Container from "../../../container";

const ModalContainer = styled(Container)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  ${Platform.OS === "android" ? "elevation: 4;" : "box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.2);"};
  ${Platform.OS === "ios" ? `padding-top: ${isIphoneX ? 30 : 20}` : ""};
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default ContainerAnimation(ModalContainer);
