import styled from "styled-components";
import Text from "../../../../../../../../../../../../components/text";

const PreviewTitle = styled(Text)`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontColor};
`;

export default PreviewTitle;
