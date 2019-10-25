import styled from "styled-components";
import Text from "../../../../../../../text";

const TextDescription = styled(Text)`
  line-height: 30px;
  flex: 1;
  ${({ isTextTrimmed }) => (isTextTrimmed ? "align-self: center;" : "")}
`;

export default TextDescription;
