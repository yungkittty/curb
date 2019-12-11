import styled from "styled-components";
import Image from "../../../../../../../../../image";

const PreviewImage = styled(Image)`
  filter: brightness(75%);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default PreviewImage;
