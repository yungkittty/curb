import styled from "styled-components";
import ButtonC from "../../../../../button-container";

const ButtonContainer = styled(ButtonC)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.buttonColor};
  height: 50px;
  width: 220px;
  border-radius: 12px;
`;

export default ButtonContainer;
