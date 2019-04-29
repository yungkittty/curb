import styled from "styled-components";
import Container from "../../../container";

const LoadingContainer = styled(Container)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: opacity 0.35s ease 0.5s;
  opacity: ${({ isAppLoaded }) => (isAppLoaded ? 0 : 1)};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default LoadingContainer;
