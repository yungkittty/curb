import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";
import IconType from "../../../../../general/icon/type";

const NavbarButton = ({ icon }) => (
  <ButtonContainer>
    <ButtonIcon icon={icon} />
  </ButtonContainer>
);

NavbarButton.propTypes = {
  icon: PropTypes.oneOf(IconType).isRequired
};

export default NavbarButton;
