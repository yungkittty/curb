import styled from "styled-components";

const ButtonContainer = styled.a`
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
