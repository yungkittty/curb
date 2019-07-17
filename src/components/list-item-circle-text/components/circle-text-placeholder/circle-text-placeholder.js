import styled from "styled-components";
import Container from "../../../container";

const CircleTextText = styled(Container)`
  width: 100%;
  height: 14px;
  border-radius: 5px;
  background: ${props => props.theme.primaryVariantColor};
`;

export default CircleTextText;
