import styled from "styled-components";
import Text from "../../../../../../../text";

const TextDescription = styled(Text).attrs(() => ({ type: "h5" }))`
  line-height: 24px;
  align-self: center;
  flex: 1;
`;

export default TextDescription;
