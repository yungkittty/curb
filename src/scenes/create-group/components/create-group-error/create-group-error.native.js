import styled from "styled-components";
import Text from "../../../../components/text";

const CreateGroupError = styled(Text).attrs(() => ({ type: "h4" }))`
  position: absolute;
  color: ${({ theme }) => theme.errorColor};
  margin: auto;
  margin-top: 48px;
`;

export default CreateGroupError;
