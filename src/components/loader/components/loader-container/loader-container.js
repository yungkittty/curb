import styled from "styled-components";
import Container from "../../../container";

const LoaderContainer = styled(Container)`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor};
  z-index: 1;
`;

export default LoaderContainer;
