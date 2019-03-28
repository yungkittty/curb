import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import CodeInput from "react-native-code-input";

const InputCode = ({ theme, id, fields, onChange }) => (
  <CodeInput
    codeLength={fields}
    onFulfill={value => onChange({ target: { id, value } })}
    containerStyle={{ maxHeight: 60 }}
    codeInputStyle={{
      width: 28,
      height: 60,
      margin: 0,
      marginLeft: 12,
      marginRight: 12,
      fontWeight: "600",
      fontFamily: "Montserrat",
      fontSize: 22,
      color: theme.fontColor
    }}
    activeColor={theme.fontColor}
    inactiveColor={theme.primaryColor}
    borderType="underline"
  />
);

InputCode.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  fields: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withTheme(InputCode);
