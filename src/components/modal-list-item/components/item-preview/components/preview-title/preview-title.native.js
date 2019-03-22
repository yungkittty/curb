import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text)`
  font-size: ${({ titleCentered }) => (titleCentered ? "18" : "14")}px;
  font-weight: 700;
  color: ${({ theme, titleColor, disabled }) =>
    !disabled ? titleColor || theme.fontColor : theme.secondaryVariantColor};
  margin-top: ${({ titleCentered }) => (titleCentered ? "12" : "-8")}px;
`;

export default PreviewTitle;
