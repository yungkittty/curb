import styled from "styled-components";
import Text from "../../../text";

const CodeError = styled(Text)`
  position: absolute;
  bottom: -22px;
  left: 10px;
  color: ${({ theme }) => theme.errorColor};
`;

export default CodeError;
