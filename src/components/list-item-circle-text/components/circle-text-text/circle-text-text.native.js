import styled from "styled-components";
import Text from "../../../text";

const CircleTextText = styled(Text).attrs(() => ({ ellipsizeMode: "tail", numberOfLines: 1 }))`
  width: 70px;
  text-align: center;
`;

export default CircleTextText;
