import styled from "styled-components";
import Image from "../../../../../../../../components/image";

const MediaImage = styled(Image).attrs(() => ({ objectFit: "contain" }))`
  width: 100%;
  min-width: 100%;
`;

export default MediaImage;
