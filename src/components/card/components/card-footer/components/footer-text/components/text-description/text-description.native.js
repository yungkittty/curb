import styled from "styled-components";
import Text from "../../../../../../../text";

const TextDescription = styled(Text).attrs(() => ({ type: "h5" }))`
  position: relative;
  line-height: 24px;
  flex: 1;
  ${({ isNotCentered }) => (isNotCentered ? `align-self: center; top: -6px;` : ``)}
`;

export default TextDescription;
