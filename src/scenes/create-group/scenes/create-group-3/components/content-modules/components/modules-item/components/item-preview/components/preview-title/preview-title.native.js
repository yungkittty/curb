import styled from "styled-components";
import Text from "../../../../../../../../../../../../components/text";

const PreviewTitle = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontColor};
`;

export default PreviewTitle;
