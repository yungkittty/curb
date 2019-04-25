import styled from "styled-components";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.js

const Input = styled.input`
  font-family: "Montserrat-Regular";
  font-weight: initial;
  color: ${({ theme }) => theme.fontColor}
  box-sizing: border-box;
  box-shadow: none;
  padding: 18px;
  font-size: 18px;
  border: 0;

  &:focus {
    outline: 0;
  }
`;

export default Input;
