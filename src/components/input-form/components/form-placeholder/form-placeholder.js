import styled from "styled-components";
import Text from "../../../text";

const FormPlaceholder = styled(Text).attrs(({ upper }) => ({
  type: `h${upper ? 5 : 4}`
}))`
  position: absolute;
  pointer-events: none;
  transition: 200ms ease all;
  width: 100%;
  font-size: ${({ upper }) => (upper ? "12" : "18")}px;
  top: ${({ upper }) => (upper ? "-12" : "18")}px;
  left: ${({ upper }) => (upper ? "4" : "18")}px;
  color: ${({ theme }) => theme.secondaryColor};
`;

export default FormPlaceholder;
