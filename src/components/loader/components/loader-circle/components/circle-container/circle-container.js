import styled from "styled-components";
import Container from "../../../../../container";

const CircleContainer = styled(Container)`
  position: absolute;
  display: flex;
  width: ${({ innerDiameter }) => innerDiameter - innerDiameter / 3}px;
  height: ${({ innerDiameter }) => innerDiameter - innerDiameter / 3}px;
  transform: rotate(${({ index }) => index * 15}deg);
`;

export default CircleContainer;
