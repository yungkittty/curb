import styled from "styled-components";
import Text from "../../../text";

const FormError = styled(Text)`
  position: absolute;
  bottom: -18px;
  left: 0px;
  color: ${props => props.theme.errorColor};
`;

export default FormError;
