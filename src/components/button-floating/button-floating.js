import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import FloatingContainer from "./components/floating-container";
import Icon from "../icon";

const ButtonFloating = ({ onClick, icon, theme }) => (
  <FloatingContainer onClick={onClick}>
    <Icon icon={icon} size="medium" color={theme.secondaryVariantColor} />
  </FloatingContainer>
);

ButtonFloating.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(ButtonFloating);
