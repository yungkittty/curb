import React from "react";
import PropTypes from "prop-types";
import MenuContainer from "./components/menu-container";
import Icon from "../../../../../icon";
import Circle from "../../../../../circle";

const ContentMenu = ({ dropdownMenu: { icon, onClick }, onMenuClick, selectedMediaType }) => (
  <Circle
    as={MenuContainer}
    diameter="extra-extra-small"
    onClick={onClick ? () => onClick(selectedMediaType) : () => onMenuClick()}
    style={{ overflow: "visible" }}
  >
    <Icon color="white" size="extra-extra-small" icon={icon} />
  </Circle>
);

ContentMenu.propTypes = {
  dropdownMenu: PropTypes.shape({
    icon: PropTypes.string,
    optionsList: PropTypes.array,
    onClick: PropTypes.func
  }).isRequired,
  onMenuClick: PropTypes.func.isRequired,
  selectedMediaType: PropTypes.string.isRequired
};

export default ContentMenu;
