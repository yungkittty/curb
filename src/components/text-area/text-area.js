import styled from "styled-components";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.js

const TextArea = styled.textarea`
  font-family: "Montserrat-Regular";
  padding: 18px;
  font-size: 18px;
  border: 0px;
  resize: none;
  outline: none;
  box-shadow: none;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
`;

export default TextArea;
