import styled from "styled-components";
import Container from "../../../../../../../../../container";

const PreviewContainer = styled(Container)`
  height: ${({ cardSize }) => cardSize.contentHeight}px;
  width: ${({ cardSize }) => cardSize.width}px;
  background: ${({ theme }) => theme.primaryVariantColor}
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export default PreviewContainer;
