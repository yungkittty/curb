import styled from "styled-components";
import Text from "../../../../../text";

const PreviewDescription = styled(Text)`
  line-height: 18;
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.fontVariantColor};
`;

export default PreviewDescription;
