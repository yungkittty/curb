import styled from "styled-components";
import Text from "../../../../../../../../../../../../components/text";

const PreviewDescription = styled(Text)`
  line-height: 14;
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.fontVariantColor};
  margin-top: -2px;
`;

export default PreviewDescription;
