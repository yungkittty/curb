import styled from "styled-components";
import Button from "../../../../../button";

const ButtonContainer = styled(Button)`
  background: ${({ theme: { secondaryVariantColor } }) =>
    secondaryVariantColor};
  border-radius: 30px;
  margin: 0 auto;
  overflow: hidden;
  width: 48px;
  height: 48px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default ButtonContainer;
