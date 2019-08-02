import styled from "styled-components";
import Container from "../../../../../container";

const CircleRound = styled(Container)`
  width: ${({ innerDiameter }) => innerDiameter / 10}px;
  height: ${({ innerDiameter }) => innerDiameter / 10}px;
  border-radius: ${({ innerDiameter }) => innerDiameter / 2}px;
  background-color: ${({ theme }) => theme.secondaryVariantColor};
`;

export default CircleRound;
