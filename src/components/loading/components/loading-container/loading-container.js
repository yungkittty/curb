import styled from "styled-components";
import Container from "../../../container";

const LoadingContainer = styled(Container)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333;
  opacity: 0.2;
  z-index: 1;
`;

export default LoadingContainer;
