import styled from "styled-components";
import Text from "../../../../components/text";

const CreateGroupError = styled(Text).attrs(() => ({
  type: "h4",
  weight: 500
}))`
  text-align: center;
  margin: 12px auto;
  height: 22px;
  color: ${({ theme }) => theme.errorColor};
`;

export default CreateGroupError;
