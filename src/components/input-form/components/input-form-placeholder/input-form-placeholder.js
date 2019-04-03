import styled from "styled-components";
import Text from "../../../text";

const InputFormPlaceholder = styled(Text)`
  position: absolute;
  pointer-events: none;
  transition: 200ms ease all;
  font-size: ${({ upper }) => (upper ? "12" : "18")}px;
  top: ${({ upper }) => (upper ? "-12" : "18")}px;
  left: ${({ upper }) => (upper ? "4" : "18")}px;
  color: ${({ theme }) => theme.secondaryColor};
`;

export default InputFormPlaceholder;
