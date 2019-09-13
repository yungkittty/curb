import styled from "styled-components";
import Text from "../../../text";

const FormValueMaxLength = styled(Text)`
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: ${({ theme }) => theme.secondaryVariantColor};
`;

export default FormValueMaxLength;
