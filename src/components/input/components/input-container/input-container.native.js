import styled from "styled-components";
import { TextInput, Platform } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

const InputContainer = styled(TextInput).attrs(({ type, id, onChange, isMultiline, ...others }) => ({
  ...others,
  textAlignVertical: "top",
  keyboardType: type === "email" ? "email-address" : undefined,
  secureTextEntry: type === "password",
  onChange: undefined,
  onChangeText: value => onChange({ target: { id, value } }),
  multiline: isMultiline
}))`
      padding: 16px;
      font-family: Montserrat-Regular;
      font-size: 16px;
      ${Platform.OS === "android" ? "font-weight: normal;" : ""}
      ${props => (props.isMultiline ? `line-height: 24px;` : "")}
      color: ${({ theme }) => theme.fontColor};
    `;
