import styled from "styled-components";
import Text from "../../../text";

const CircleTextText = styled(Text)`
  width: 100px;
  ${props => (!props.children ? "height: 14px;" : "")}
  border-radius: 5px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${props => (!props.children ? `background: ${props.theme.primaryVariantColor};` : "")}
`;

export default CircleTextText;
