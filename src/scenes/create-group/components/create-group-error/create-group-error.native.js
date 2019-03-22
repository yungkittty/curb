import styled from "styled-components";
import Text from "../../../../components/text";

const CreateGroupError = styled(Text)`
  position: absolute;
  font-size: 14px;
  color: ${({ theme }) => theme.errorColor};
  margin: auto;
  margin-top: 44px;
`;

export default CreateGroupError;
