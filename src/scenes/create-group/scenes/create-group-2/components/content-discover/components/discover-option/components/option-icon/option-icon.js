import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../../../../../../components/icon";

const OptionIcon = ({ theme, icon, size, selected }) => (
  <IconContainer>
    <Icon
      icon={icon}
      size={size}
      color={selected === false ? theme.pimaryColor : theme.fontVariantColor}
    />
  </IconContainer>
);

OptionIcon.defaultProps = {
  size: undefined,
  selected: undefined
};

OptionIcon.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  selected: PropTypes.bool
};

export default withTheme(OptionIcon);
