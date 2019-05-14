import styled from "styled-components";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.js

const TextArea = styled.textarea`
  padding: 18px;
  font-size: 18px;
  border-top: none;
  border-right: none;
  border-left: none;
  resize: none;
  outline: none;
  box-shadow: none;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
`;

export default TextArea;
