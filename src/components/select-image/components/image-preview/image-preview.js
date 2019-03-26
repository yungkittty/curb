import styled from "styled-components";
import Image from "../../../image";

const ImagePreview = styled(Image)`
  position: absolute;
  top: 0px;
  overflow: hidden;
  width: ${({ size }) => (size === "small" ? "200" : "280")}px;
  height: ${({ size }) => (size === "small" ? "200" : "280")}px;
  border-width: ${({ src }) => (!src ? "1" : "0")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default ImagePreview;
