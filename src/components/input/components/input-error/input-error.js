import styled from "styled-components";
import Text from "../../../text";

const InputError = styled(Text)`
  position: absolute;
  left: 0px;
  bottom: -32px;
  font-size: 14px;
  color: ${({ theme }) => theme.errorColor};
`;

export default InputError;
