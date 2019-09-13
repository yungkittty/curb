import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import DropdownContainer from "./components/dropdown-container";
import DropdownSelector from "./components/dropdown-selector";
import Icon from "../../../icon";

const FormDropdown = ({ t, theme, id, options, onChange, value: selectedValue, ...others }) => (
  <DropdownContainer>
    <DropdownSelector
      {...others}
      value={selectedValue}
      onChange={({ target }) => onChange({ target: { id, value: target.value } })}
    >
      <option disabled defaultValue style={{ display: "none" }} />
      {_.map(options, ({ key, value }, index) => (
        <option key={index} value={key}>
          {value}
        </option>
      ))}
    </DropdownSelector>
    <Icon
      icon="caret-down"
      color={theme.secondaryVariantColor}
      size="extra-small"
      style={{ zIndex: -1, position: "absolute", right: 15 }}
    />
  </DropdownContainer>
);

FormDropdown.defaultProps = {
  value: undefined
};

FormDropdown.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string.isRequired })).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default _.flowRight([
  // estlint-disable-next-line
  withTranslation("groupCreate"),
  withTheme
])(FormDropdown);
