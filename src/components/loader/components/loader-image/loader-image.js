import styled, { keyframes } from "styled-components";
import Image from "../../../image";

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const LoaderImage = styled(Image)`
  width: 80px;
  height: 80px;
  animation: ${fade} 0.7s ease infinite alternate-reverse;
`;

export default LoaderImage;
