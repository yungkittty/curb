import styled from "styled-components";
import Text from "../../../../../text";

const ButtonText = styled(Text).attrs(() => ({ type: "h5" }))`
  margin-top: 2px;
  color: ${({ color }) => color};
`;

export default ButtonText;
