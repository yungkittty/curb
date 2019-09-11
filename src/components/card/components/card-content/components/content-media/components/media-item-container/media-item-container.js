import styled from "styled-components";
import Container from "../../../../../../../container";

const MediaItemContainer = styled(Container)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.fontVariantColor};
`;

export default MediaItemContainer;
