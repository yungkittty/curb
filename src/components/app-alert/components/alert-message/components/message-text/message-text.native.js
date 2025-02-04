import styled from "styled-components";
import Text from "../../../../../text";

const MessageText = styled(Text).attrs(() => ({ type: "h5" }))`
  color: ${({ theme }) => theme.backgroundColor};
`;

export default MessageText;
