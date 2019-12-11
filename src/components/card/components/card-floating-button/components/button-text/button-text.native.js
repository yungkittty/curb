import styled from "styled-components";
import Text from "../../../../../text";

const ButtonText = styled(Text).attrs(() => ({ type: "h6" }))`
  color: ${({ color }) => color};
`;

export default ButtonText;
