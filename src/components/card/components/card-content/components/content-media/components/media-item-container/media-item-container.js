import styled from "styled-components";
import Container from "../../../../../../../container";

const MediaItemContainer = styled(Container)`
  display: flex;
  flex-flow: row;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: ${({ cardSize }) => cardSize.width}px;
  height: ${({ cardSize }) => cardSize.contentHeight}px;
  background-color: ${({ theme }) => theme.fontVariantColor};
`;

export default MediaItemContainer;
