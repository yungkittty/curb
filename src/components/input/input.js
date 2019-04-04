import styled from "styled-components";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.js

const Input = styled.input`
  box-sizing: border-box;
  font-family: "Montserrat-Regular";
  padding: 18px;
  font-size: 18px;
  border: 0;
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.errorColor : theme.primaryColor)};

  &:focus {
    outline: 0;
  }
`;

export default Input;
