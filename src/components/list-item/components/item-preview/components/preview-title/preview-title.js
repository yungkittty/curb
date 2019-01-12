import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme, titleColor, disabled }) =>
    !disabled ? titleColor || theme.fontColor : theme.secondaryVariantColor};
`;

export default PreviewTitle;
