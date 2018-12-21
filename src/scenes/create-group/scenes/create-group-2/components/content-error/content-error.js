import styled from "styled-components";
import Text from "../../../../../../components/text";

const ContentError = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.errorColor};
  margin: auto;
  margin-top: 14px;
`;

export default ContentError;
