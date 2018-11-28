import styled from "styled-components";
import Button from "../../../../../button";

const ButtonContainer = styled(Button)`
  background: ${({ theme }) => theme.secondaryVariantColor};
  border-radius: 30px;
  margin: 0 auto;
  overflow: hidden;
  width: 54px;
  height: 54px;
  margin-top: 14px;
  margin-bottom: 14px;
`;

export default ButtonContainer;
