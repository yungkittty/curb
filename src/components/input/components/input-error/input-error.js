import styled from "styled-components";
import Text from "../../../text";

const InputError = styled(Text)`
  position: absolute;
  left: 0px;
  bottom: -26px;
  color: ${props => props.theme.errorColor};
`;

export default InputError;
