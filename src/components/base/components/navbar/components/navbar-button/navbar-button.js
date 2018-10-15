import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";

const NavbarButton = ({ icon, to }) => (
  <ButtonContainer to={to}>
    <ButtonIcon icon={icon} />
  </ButtonContainer>
);

NavbarButton.defaultProps = {
  icon: undefined
};

NavbarButton.propTypes = {
  icon: PropTypes.string
};

export default NavbarButton;
