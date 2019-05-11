import styled from "styled-components";
import Text from "../../../text";

const FormError = styled(Text)`
  white-space: pre;
  position: absolute;
  left: 0px;
  bottom: -18px;
  color: ${props => props.theme.errorColor};
`;

export default FormError;
