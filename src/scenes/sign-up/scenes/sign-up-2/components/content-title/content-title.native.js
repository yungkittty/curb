import styled from "styled-components";
import Text from "../../../../../../components/text";

const ContentTitle = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 46px;
  color: ${({ theme }) => theme.fontColor};
`;

export default ContentTitle;
