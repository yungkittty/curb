import styled from "styled-components";
import { Platform } from "react-native";
import Container from "../../../container";

const ImageSelector = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  border-radius: 20px;
  background: ${({ theme }) => theme.primaryVariantColor};
  width: 40px;
  height: 40px;
  ${Platform.OS === "android"
    ? "elevation: 6;"
    : "shadow-offset: 0px 3.6px; shadow-radius: 3.24px; shadow-color: rgba(0, 0, 0, 0.189);"}
`;

export default ImageSelector;
