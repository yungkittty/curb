import styled from "styled-components";
import Text from "../../../text";

const InputFormError = styled(Text)`
  white-space: pre;
  position: absolute;
  left: 0px;
  top: 64px;
  color: ${props => props.theme.errorColor};
`;

export default InputFormError;
