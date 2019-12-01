import styled from "styled-components";
import Text from "../../../../../../../text";

const TextDescription = styled(Text)`
  line-height: 30px;
  flex: 1;
  align-self: center;
  ${({ isCardSmall }) =>
    isCardSmall &&
    `
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  `}
`;

export default TextDescription;
