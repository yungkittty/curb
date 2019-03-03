import styled from "styled-components";
import Button from "../../../../../button";

const ButtonContainer = styled(Button)`
  position: relative;
  background: ${({ theme }) => theme.secondaryVariantColor};
  height: 50px;
  width: 220px;
  border-radius: 12px;
`;

export default ButtonContainer;
