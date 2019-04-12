import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text).attrs(({ titleCentered }) => ({ type: titleCentered ? "h3" : undefined }))`
  color: ${({ theme, titleColor, disabled }) =>
    !disabled ? titleColor || theme.fontColor : theme.secondaryVariantColor};
`;

export default PreviewTitle;
