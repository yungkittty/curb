import styled from "styled-components";
import Image from "../../../image";

const ImagePreview = styled(Image).attrs(({ readOnly }) => ({
  blurRadius: readOnly ? 0 : 1,
  resizeMode: "cover"
}))`
  width: 180px;
  height: 180px;
`;

export default ImagePreview;
