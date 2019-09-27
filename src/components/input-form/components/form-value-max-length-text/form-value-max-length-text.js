import styled from "styled-components";
import Text from "../../../text";

const FormValueMaxLengthText = styled(Text)`
  margin-right: 5px;
  color: ${({ isFull, theme }) => (!isFull ? theme.secondaryVariantColor : theme.errorColor)};
`;

export default FormValueMaxLengthText;
