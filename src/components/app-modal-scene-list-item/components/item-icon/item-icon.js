import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import IconContainer from "./components/icon-container";
import Icon from "../../../icon";

const ItemIcon = ({ theme, icon, disabled }) => (
  <IconContainer icon={icon}>
    {icon && (
      <Icon
        icon={icon}
        color={!disabled ? theme.fontVariantColor : theme.secondaryVariantColor}
        size="medium"
      />
    )}
  </IconContainer>
);

ItemIcon.defaultProps = {
  icon: undefined,
  disabled: undefined
};

ItemIcon.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool
};

export default withTheme(ItemIcon);
