import React from "react";
import styled from "styled-components";
import { TextInput } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

const TextArea = styled(({ type, onChange, id, ...others }) => (
  <TextInput
    {...others}
    multiline={true}
    onChangeText={text => onChange({ target: { id, value: text } })}
  />
))`
  font-family: "Montserrat-Regular";
  padding: 16px;
  font-size: 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
`;

export default TextArea;
