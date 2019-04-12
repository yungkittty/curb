import styled from "styled-components";
import Text from "../../../../../text";

const PreviewDescription = styled(Text).attrs(() => ({ type: "h6" }))`
  color: ${({ theme, disabled }) => (!disabled ? theme.fontVariantColor : theme.secondaryVariantColor)};
  margin-top: 4px;
`;

export default PreviewDescription;
