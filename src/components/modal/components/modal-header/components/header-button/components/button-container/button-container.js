import styled from "styled-components";
import Button from "../../../../../../../button";

const ButtonContainer = styled(Button)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 75px;
  ${({ position }) => position}: 0;
`;

export default ButtonContainer;
