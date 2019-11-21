import styled from "styled-components";
import Text from "../../../text";

const FormPlaceholder = styled(Text).attrs(({ isPlaceholderStatic, upper }) => ({
  type: `h${!isPlaceholderStatic && upper ? 5 : 4}`
}))`
  position: absolute;
  pointer-events: none;
  transition: 200ms ease all;
  width: 100%;
  top: ${({ isPlaceholderStatic, upper }) => (!isPlaceholderStatic ? (upper ? -12 : 18) : 22)}px;
  left: ${({ isPlaceholderStatic, upper }) => (!isPlaceholderStatic && upper ? 4 : 18)}px;
  color: ${({ theme }) => theme.secondaryColor};
`;

export default FormPlaceholder;
