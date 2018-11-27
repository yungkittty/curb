import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";

const NavigationButton = ({ icon }) => (
  <ButtonContainer onClick={{ pathname: "/sign-in", state: { isModal: true } }}>
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
