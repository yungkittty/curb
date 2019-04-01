import styled from "styled-components";
import Text from "../../../../../text";

const PreviewDescription = styled(Text)`
  line-height: 14;
  font-size: 10px;
  color: ${({ theme, disabled }) =>
    !disabled ? theme.fontVariantColor : theme.secondaryVariantColor};
`;

export default PreviewDescription;
