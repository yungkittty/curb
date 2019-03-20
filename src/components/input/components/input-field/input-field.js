import styled from "styled-components";

const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 18px;
  font-family: "Montserrat";
  font-size: 18px;
  border: 0;
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.errorColor : theme.primaryColor)};
  color: ${({ theme }) => theme.fontColor};
  ${({ fieldStyle }) => fieldStyle && `font-size: ${fieldStyle.fontSize}px;`}
  ${({ fieldStyle }) => fieldStyle && `font-weight: ${fieldStyle.fontWeight};`}
  ${({ fieldStyle }) => fieldStyle && `text-align:${fieldStyle.textAlign};`}
`;

export default InputField;
