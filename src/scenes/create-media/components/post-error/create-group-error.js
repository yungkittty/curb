import styled from "styled-components";
import Text from "../../../../components/text";

const CreateGroupError = styled(Text).attrs(() => ({
  type: "h4",
  weight: 500
}))`
  position: absolute;
  align-self: center;
  margin-top: 68px;
  color: ${({ theme }) => theme.errorColor};
`;

export default CreateGroupError;
