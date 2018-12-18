import styled from "styled-components";
import Button from "../../../../../../../button";

const ButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  height: 75px;
  background: ${({ theme }) => theme.secondaryColor};
`;

export default ButtonContainer;
