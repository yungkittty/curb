import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonContainer from "./components/button-container";
import Icon from "../../../../../../../icon";

const HeaderButton = ({ theme, icon, to, onClick }) => (
  <ButtonContainer to={to} onClick={onClick}>
    <Icon icon={icon} color={theme.fontColor} size="small" />
  </ButtonContainer>
);

HeaderButton.defaultProps = {
  theme: undefined,
  icon: undefined,
  to: undefined,
  onClick: undefined
};

HeaderButton.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object,
  icon: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func
};

export default withTheme(HeaderButton);
