import styled from "styled-components";
import Text from "../../../../../text";

const PreviewDescription = styled(Text).attrs(() => ({ type: "h5" }))`
  color: ${({ theme, disabled }) => (!disabled ? theme.fontVariantColor : theme.secondaryVariantColor)};
  margin-top: 10px;
`;

export default PreviewDescription;
