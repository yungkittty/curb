import styled from "styled-components";
import Text from "../../../text";

const FormPlaceholder = styled(Text).attrs(({ upper }) => ({
  type: `h${upper ? 5 : 4}`
}))`
  position: absolute;
  pointer-events: none;
  transition: font-size 200ms ease 0s, top 200ms ease 0s, left 200ms ease 0s;
  width: 100%;
  top: ${({ upper }) => (upper ? "-12" : "18")}px;
  left: ${({ upper }) => (upper ? "4" : "18")}px;
  color: ${({ theme, error }) => (error ? theme.errorColor : theme.secondaryColor)};
`;

export default FormPlaceholder;
