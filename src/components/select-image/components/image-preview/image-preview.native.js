import styled from "styled-components";
import { Platform } from "react-native";
import Image from "../../../image";

const ImagePreview = styled(Image).attrs(({ readOnly }) => ({
  // eslint-disable-next-line no-nested-ternary
  blurRadius: readOnly ? 0 : Platform.OS === "android" ? 1 : 4,
  resizeMode: "cover"
}))`
  width: ${({ size }) => (size === "small" ? "150" : "180")}px;
  height: ${({ size }) => (size === "small" ? "150" : "180")}px;
`;

export default ImagePreview;
