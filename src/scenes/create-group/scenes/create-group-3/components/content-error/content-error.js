import styled from "styled-components";
import Text from "../../../../../../components/text";

const ContentError = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.errorColor};
  margin: auto;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export default ContentError;
