import styled from "styled-components";
import Image from "../../../image";

const ImagePreview = styled(Image)`
  width: ${({ size }) => (size === "small" ? "200" : "280")}px;
  height: ${({ size }) => (size === "small" ? "200" : "280")}px;
  filter: blur(${({ readOnly }) => (readOnly ? "0" : "2")}px)
    brightness(${({ readOnly }) => (readOnly ? "100" : "80")}%);
`;

export default ImagePreview;
