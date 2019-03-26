import styled from "styled-components";
import Image from "../../../image";

const ImagePreview = styled(Image).attrs(() => ({
  resizeMode: "cover"
}))`
  position: absolute;
  top: 0px;
  border-radius: 100px;
  overflow: hidden;
  width: ${({ size }) => (size === "small" ? "150" : "180")}px;
  height: ${({ size }) => (size === "small" ? "150" : "180")}px;
  border-width: ${({ src }) => (!src ? "1" : "0")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default ImagePreview;
