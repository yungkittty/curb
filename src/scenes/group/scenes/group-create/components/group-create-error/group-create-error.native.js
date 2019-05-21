import styled from "styled-components";
import Text from "../../../../../../components/text";

const GroupCreateError = styled(Text).attrs(() => ({ type: "h4", weight: 500 }))`
  position: absolute;
  align-self: center;
  top: 48px;
  color: ${({ theme }) => theme.errorColor};
`;

export default GroupCreateError;
