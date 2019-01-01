import styled from "styled-components";
import Text from "../../../../../../components/text";

const ContentError = styled(Text)`
  position: absolute;
  font-size: 16px;
  color: ${({ theme }) => theme.errorColor};
  margin: auto;
  margin-top: 42px;
`;

export default ContentError;
