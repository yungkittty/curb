import styled from "styled-components";
import Text from "../../../text";

const AlertText = styled(Text).attrs(() => ({ type: undefined, weight: 600 }))`
  color: ${({ theme }) => theme.backgroundColor};
`;

export default AlertText;
