import styled from "styled-components";
import Image from "../../../../../../../../components/image";

const MediaImage = styled(Image).attrs(() => ({ objectFit: "cover" }))`
  width: 100%;
  min-width: 100%;
  height: 250px;
`;

export default MediaImage;
