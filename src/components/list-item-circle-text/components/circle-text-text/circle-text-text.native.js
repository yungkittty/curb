import styled from "styled-components";
import Text from "../../../text";

const CircleTextText = styled(Text).attrs(() => ({ ellipsizeMode: "tail", numberOfLines: 1 }))`
  width: 90px;
  ${props => (!props.children ? "height: 14px;" : "")}
  border-radius: 5px;
  text-align: center;
  ${props => (!props.children ? `background: ${props.theme.primaryVariantColor};` : "")}
`;

// 70

export default CircleTextText;
