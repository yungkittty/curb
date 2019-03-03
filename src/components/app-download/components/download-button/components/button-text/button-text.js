import styled from "styled-components";
import Text from "../../../../../text";

const ButtonText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.backgroundColor};
`;

export default ButtonText;
