import styled from "styled-components";
import Container from "../../../../../container";

const ButtonContainer = styled(Container)`
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
