import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import MenuContainer from "./components/menu-container";
import Button from "../../../../../button";
import Icon from "../../../../../icon";

const FooterMenu = ({ theme, onMenuClick }) => (
  <Button as={MenuContainer} diameter="extra-extra-small" onClick={onMenuClick}>
    <Icon color={theme.primaryColor} size="extra-extra-small" icon="ellipsis-h" />
  </Button>
);

FooterMenu.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  onMenuClick: PropTypes.func.isRequired
};

export default withTheme(FooterMenu);
