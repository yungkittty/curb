import styled from "styled-components";
import Container from "../../../container";

const LoaderCircleContainer = styled(Container)`
  position: absolute;
  display: flex;
  width: ${({ innerDiameter }) => innerDiameter - innerDiameter / 10}px;
  height: ${({ innerDiameter }) => innerDiameter - innerDiameter / 10}px;
  transform: rotate(${({ index }) => index * 12}deg);
`;

export default LoaderCircleContainer;
