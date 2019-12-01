import styled from "styled-components";
import Text from "../../../../../../../text";

const TextDescription = styled(Text).attrs(() => ({ type: "h5" }))`
  line-height: ${({ isCardSmall }) => (isCardSmall ? 22 : 24)}px;
  flex: 1;
  ${({ isTextTrimmed }) => (isTextTrimmed ? `align-self: center;` : ``)}
`;

export default TextDescription;
