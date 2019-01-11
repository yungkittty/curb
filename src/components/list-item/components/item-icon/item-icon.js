import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import IconContainer from "./components/icon-container";
import Icon from "../../../icon";

const ItemIcon = ({ theme, icon }) => (
  <IconContainer icon={icon}>
    <Icon icon={icon} color={theme.fontVariantColor} size="medium" />
  </IconContainer>
);

ItemIcon.defaultProps = {
  theme: undefined,
  icon: undefined
};

ItemIcon.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  icon: PropTypes.string
};

export default withTheme(ItemIcon);
