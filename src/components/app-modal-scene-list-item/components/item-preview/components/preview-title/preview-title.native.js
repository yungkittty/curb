import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text).attrs(({ titleCentered }) => ({ type: titleCentered ? "h3" : "h4" }))`
  ${({ theme, titleColor, disabled }) =>
    // eslint-disable-next-line
    !disabled ? (titleColor ? `color: ${titleColor};` : "") : `color: ${theme.secondaryVariantColor};`};
`;

export default PreviewTitle;
