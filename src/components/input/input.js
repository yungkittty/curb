import styled from "styled-components";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.js

const Input = styled.input`
  box-sizing: border-box;
  box-shadow: none;
  font-family: "Montserrat-Regular";
  padding: 18px;
  font-size: 18px;
  border: 0;

  &:focus {
    outline: 0;
  }
`;

export default Input;
