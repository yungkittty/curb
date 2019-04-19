import styled from "styled-components";
import Text from "../../../text";

const AlertText = styled(Text).attrs(() => ({ type: "h5", weight: 400 }))`
  color: ${({ theme }) => theme.backgroundColor};
`;

export default AlertText;
