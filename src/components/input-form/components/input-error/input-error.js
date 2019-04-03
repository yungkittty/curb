import styled from "styled-components";
import Text from "../../../text";

const InputError = styled(Text)`
  position: absolute;
  left: 0px;
  top: 64px;
  font-size: 14px;
  color: ${props => props.theme.errorColor};
`;

export default InputError;
