import styled from "styled-components";
import Text from "../../../text";

const FormError = styled(Text)`
  position: absolute;
  left: 0px;
  top: 56px;
  color: ${props => props.theme.errorColor};
`;

export default FormError;
