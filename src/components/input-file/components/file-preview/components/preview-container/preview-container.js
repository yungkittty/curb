import styled from "styled-components";
import Container from "../../../../../container";

const PreviewContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: ${({ haveData }) => (haveData ? "0" : "1")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default PreviewContainer;
