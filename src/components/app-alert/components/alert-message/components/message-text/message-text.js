import styled from "styled-components";
import Text from "../../../../../text";

const MessageText = styled(Text)`
  color: ${({ theme }) => theme.backgroundColor};
`;

export default MessageText;
