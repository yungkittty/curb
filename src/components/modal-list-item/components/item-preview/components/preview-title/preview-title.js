import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text).attrs(() => ({ type: "h4" }))`
  color: ${({ theme, titleColor, disabled }) =>
    !disabled ? titleColor || theme.fontColor : theme.secondaryVariantColor};
`;

export default PreviewTitle;
