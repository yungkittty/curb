import styled from "styled-components";

const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 18px;
  font-family: "Montserrat";
  font-size: 18px;
  outline: none;
  border: 0;
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.errorColor : theme.primaryColor)};
`;

export default InputField;
