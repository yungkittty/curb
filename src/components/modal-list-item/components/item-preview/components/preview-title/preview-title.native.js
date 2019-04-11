import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text).attrs(({ titleCentered }) => ({
  type: titleCentered ? "h3" : undefined
}))`
  color: ${({ theme, titleColor, disabled }) =>
    !disabled ? titleColor || theme.fontColor : theme.secondaryVariantColor};
  margin-top: ${({ titleCentered }) => (titleCentered ? "12" : "-8")}px;
`;

export default PreviewTitle;
