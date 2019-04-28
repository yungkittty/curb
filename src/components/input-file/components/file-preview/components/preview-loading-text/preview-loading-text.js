import styled from "styled-components";
import Text from "../../../../../text";

const PreviewLoadingText = styled(Text).attrs(() => ({ type: "h1", weight: 700 }))`
  color: white;
  cursor: none;
  user-select: unset;
`;

export default PreviewLoadingText;
