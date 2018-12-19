import styled from "styled-components";
import Text from "../../../../../../../text";

const ButtonTitle = styled(Text)`
  position: relative;
  text-align: center;
  font-size: 18px;
  margin: auto;
  width: 100%;
  color: ${({ theme }) => theme.backgroundColor};
`;

export default ButtonTitle;
