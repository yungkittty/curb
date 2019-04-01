import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text)`
  font-size: 18px;
  color: ${({ theme, titleColor, disabled }) =>
    !disabled ? titleColor || theme.fontColor : theme.secondaryVariantColor};
`;

export default PreviewTitle;
