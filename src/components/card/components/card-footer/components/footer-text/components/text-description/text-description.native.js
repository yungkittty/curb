import styled from "styled-components";
import Text from "../../../../../../../text";

const TextDescription = styled(Text).attrs(() => ({ type: "h5" }))`
  line-height: 26px;
  flex: 1;
  ${({ isTextTrimmed }) => (isTextTrimmed ? `align-self: center;` : ``)}
`;

export default TextDescription;
