import styled from "styled-components";
import Image from "../../../image";

const ImagePreview = styled(Image).attrs(() => ({ resizeMode: "cover" }))`
  width: 140px;
  height: 140px;
`;

export default ImagePreview;
