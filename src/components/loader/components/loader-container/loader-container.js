import styled from "styled-components";
import Container from "../../../container";

const LoaderContainer = styled(Container)`
  display: flex;
  position: relative;
  z-index: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default LoaderContainer;
