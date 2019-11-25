import styled from "styled-components";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.js

const InputContainer = styled.input.attrs(({ isMultiline }) => ({
  as: isMultiline ? "textarea" : undefined
}))`
  box-sizing: border-box;
  padding: 18px;
  border: 0;
  font-family: "Montserrat-Regular";
  font-size: 18px;
  ${props => (props.isMultiline ? `line-height: 30px;` : "")}
  box-shadow: none;
  color: ${({ theme }) => theme.fontColor};
  resize: none;

  &:focus {
    outline: 0;
  }
`;

export default InputContainer;
