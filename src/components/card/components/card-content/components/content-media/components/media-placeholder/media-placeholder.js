import styled from "styled-components";
import Container from "../../../../../../../container";

const MediaPlaceholder = styled(Container)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.primaryVariantColor};
`;

export default MediaPlaceholder;
