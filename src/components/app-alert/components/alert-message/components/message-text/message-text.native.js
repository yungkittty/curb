import styled from "styled-components";
import Text from "../../../../../text";

const MessageText = styled(Text).attrs(() => ({ type: "h4", weight: 600 }))`
  color: ${({ theme }) => theme.backgroundColor};
`;

export default MessageText;
