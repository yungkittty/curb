import styled from "styled-components";
import { Platform } from "react-native";
import Container from "../../../container";

const ImageSelector = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  border-radius: 20px;
  background: ${({ theme }) => theme.primaryVariantColor};
  width: 40px;
  height: 40px;
  ${Platform.OS === "android"
    ? "elevation: 4;"
    : "shadow-offset: 0px 2.4px; shadow-radius: 2.16px; shadow-color: rgba(0, 0, 0, 0.189); shadow-opacity: 1;"}
`;

export default ImageSelector;
