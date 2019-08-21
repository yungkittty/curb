import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import RNPickerSelect from "react-native-picker-select";
import { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import DropdownContainer from "./components/dropdown-container/dropdown-container";
import Text from "../../../text";
import Icon from "../../../icon";

const FormDropdown = ({ t, theme, id, options, onChange, value: selectedValue, ...others }) => (
  <DropdownContainer>
    <Text type="h4" weight={400} style={{ position: "absolute", padding: 16 }}>
      {selectedValue !== "" &&
        t(`groupCreate:groupCategoryOptions.${_.find(options, { value: selectedValue }).value}`)}
    </Text>
    <RNPickerSelect
      {...others}
      placeholder={{
        label: t("common:selectOption"),
        value: null,
        color: theme.secondaryVariantColor
      }}
      style={{ inputAndroid: { opacity: 0 }, inputIOS: { opacity: 0 } }}
      onValueChange={value => value && onChange({ target: { id, value } })}
      items={_.map(options, item => ({
        value: item.value,
        key: item.value,
        label: t(`groupCreate:groupCategoryOptions.${item.value}`)
      }))}
    />
    <Icon
      icon="caret-down"
      color={theme.secondaryVariantColor}
      size="extra-small"
      style={{ position: "absolute", right: 10 }}
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

export default _.flowRight([withTranslation(""), withTheme])(FormDropdown);
