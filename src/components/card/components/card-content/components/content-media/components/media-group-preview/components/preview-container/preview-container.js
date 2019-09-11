import styled from "styled-components";
import Container from "../../../../../../../../../container";

const PreviewContainer = styled(Container)`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.primaryVariantColor}
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export default PreviewContainer;
