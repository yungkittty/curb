import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import CodeInput from "react-native-confirmation-code-field";

const InputCode = ({ theme, id, fields, onChange }) => (
  <CodeInput
    autoFocus
    codeLength={fields}
    onFulfill={value => onChange({ target: { id, value } })}
    size={46}
    containerProps={{ maxHeight: 46 }}
    cellProps={{
      style: {
        color: theme.fontColor
      },
      width: 30,
      height: 60,
      margin: 0,
      marginLeft: 12,
      marginRight: 12,
      fontWeight: "600",
      fontFamily: "Montserrat",
      fontSize: 22
    }}
    activeColor={theme.fontColor}
    inactiveColor={theme.primaryColor}
    variant="border-b"
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
