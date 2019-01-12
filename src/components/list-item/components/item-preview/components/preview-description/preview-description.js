import styled from "styled-components";
import Text from "../../../../../text";

const PreviewDescription = styled(Text)`
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme, disabled }) =>
    !disabled ? theme.fontVariantColor : theme.secondaryVariantColor};
  margin-top: -2px;
`;

export default PreviewDescription;
