import styled from "styled-components";
import Container from "../../../../../container";

const MediaTypesContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
`;

export default MediaTypesContainer;
