import PropTypes from "prop-types";
import styled from "styled-components";
import { TextInput } from "react-native";

const InputField = styled(TextInput).attrs({
  secureTextEntry: ({ type }) => type === "password",
  onChangeText: ({ onChange, id, text }) =>
    onChange({ target: { id, value: text } })
})`
  font-size: 18px;
  padding: 18px;
  borderbottomwidth: 1px;
  borderbottomcolor: ${props => (props.error ? "#eb5757" : "#c8ccd4")};
  width: 100%;
`;

InputField.defaultProps = {
  type: undefined,
  placeholder: undefined,
  value: undefined,
  onChange: undefined,
  id: undefined,
  style: undefined,
  children: undefined
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  /* eslint-disable-next-line */
  style: PropTypes.array,
  children: PropTypes.func
};

export default InputField;
