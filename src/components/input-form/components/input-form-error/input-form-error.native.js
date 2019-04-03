import styled from "styled-components";
import Text from "../../../text";

const InputFormError = styled(Text)`
  position: absolute;
  left: 0px;
  top: 64px;
  color: ${props => props.theme.errorColor};
`;

export default InputFormError;
