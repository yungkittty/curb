import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";

// to={{ pathname: "/sign-up", state: { isModal: true }}}

const NavigationButton = ({ icon }) => (
  <ButtonContainer to={{ pathname: "/sign-in", state: { isModal: true } }}>
    <ButtonIcon icon={icon} />
  </ButtonContainer>
);

NavigationButton.defaultProps = {
  icon: undefined
};

NavigationButton.propTypes = {
  icon: PropTypes.string
};

export default NavigationButton;
