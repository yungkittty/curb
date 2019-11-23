import styled from "styled-components";
import Container from "../../../container";

const LoaderContainer = styled(Container)`
  display: flex;
  z-index: 2;
  ${({ noFlex }) => (noFlex ? undefined : "align-items: center;")}
  justify-content: center;
  flex: ${({ noFlex }) => (noFlex ? 0 : 1)};
`;

export default LoaderContainer;
