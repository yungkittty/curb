import styled from "styled-components";
import Container from "../../../../../container";

const MediaTypesContainer = styled(Container)`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.primaryColor};
`;

export default MediaTypesContainer;
