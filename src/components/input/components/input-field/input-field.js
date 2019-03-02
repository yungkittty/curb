import styled from "styled-components";

const InputField = styled.input`
  box-sizing: border-box;
  font-size: 18px;
  padding: 18px;
  border: 0;
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.errorColor : theme.primaryColor)};
  width: 100%;
`;

export default InputField;
