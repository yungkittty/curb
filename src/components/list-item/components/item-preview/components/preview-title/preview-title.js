import styled from "styled-components";
import Text from "../../../../../text";

const PreviewTitle = styled(Text)`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: ${({ titleColor, theme }) => titleColor || theme.fontColor};
`;

export default PreviewTitle;
