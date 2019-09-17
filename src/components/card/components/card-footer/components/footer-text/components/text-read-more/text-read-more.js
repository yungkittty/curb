import styled from "styled-components";
import ButtonContainer from "../../../../../../../button-container";
import Text from "../../../../../../../text";

const TextReadMore = styled(ButtonContainer).attrs(() => ({ as: Text }))`
  display: initial;
  color: ${({ theme }) => theme.linkColor};
`;

export default TextReadMore;
