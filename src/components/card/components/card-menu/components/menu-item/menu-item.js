import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ItemText from "./components/item-text";
import ItemIcon from "./components/item-icon";

const MenuItem = ({ theme, text, icon, onClick }) => (
  <ItemContainer onClick={onClick} hoverColor={theme.primaryColor}>
    <ItemText weight={700}>{text}</ItemText>
    <ItemIcon icon={icon} color={theme.secondaryColor} />
  </ItemContainer>
);

MenuItem.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withTheme(MenuItem);
