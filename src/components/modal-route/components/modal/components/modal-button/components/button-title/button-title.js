import styled from "styled-components";

const ButtonTitle = styled(Text)`
  position: relative;
  text-align: center;
  font-size: 18px;
  margin: auto;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
`;

export default ButtonTitle;
