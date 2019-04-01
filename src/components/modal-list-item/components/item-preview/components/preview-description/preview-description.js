import styled from "styled-components";
import Text from "../../../../../text";

const PreviewDescription = styled(Text)`
  display: block;
  font-size: 12px;
  color: ${({ theme, disabled }) =>
    !disabled ? theme.fontVariantColor : theme.secondaryVariantColor};
  margin-top: 6px;
`;

export default PreviewDescription;
