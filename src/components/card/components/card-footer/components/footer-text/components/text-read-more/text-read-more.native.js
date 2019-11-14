import styled from "styled-components";
import Text from "../../../../../../../text";

const TextReadMore = styled(Text).attrs(({ onClick }) => ({ type: "h5", onPress: onClick }))`
  color: ${({ theme }) => theme.linkColor};
`;

export default TextReadMore;
