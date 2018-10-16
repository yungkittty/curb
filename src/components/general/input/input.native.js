import styled from "styled-components";
import { TextInput } from "react-native";

const Input = styled(TextInput).attrs({
  secureTextEntry: props => (props.password ? true : false)
})`
  font-size: 18px;
  padding: 18px;
  borderBottomWidth: 1px;
  borderBottomColor: #c8ccd4;
`;

export default Input;
