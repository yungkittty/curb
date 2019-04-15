import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text).attrs(({ titleCentered }) => ({ type: titleCentered ? "h3" : "h4" }))`
  color: ${({ theme, titleColor, disabled }) => (!disabled ? titleColor : theme.secondaryVariantColor)};
`;

export default PreviewTitle;
