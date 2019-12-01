import styled from "styled-components";
import Text from "../../../../../../../text";

const TextDescription = styled(Text).attrs(({ isCardSmall }) => ({
  type: "h5",
  numberOfLines: isCardSmall ? 3 : undefined
}))`
  line-height: ${({ isCardSmall }) => (isCardSmall ? 22 : 24)}px;
  flex: 1;
  text-align-vertical: center;
`;

export default TextDescription;
