import styled from "styled-components";
import Text from "../../../text";

const CodeError = styled(Text)`
  position: absolute;
  bottom: -32px;
  left: 10px;
  color: ${props => props.theme.errorColor};
`;

export default CodeError;
