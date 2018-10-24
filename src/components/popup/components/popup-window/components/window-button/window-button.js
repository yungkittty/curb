import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonTitle from "./components/button-title";

const WindowButton = ({ button, buttonTo, buttonFunc }) => (
  <ButtonContainer to={buttonTo} onClick={buttonFunc}>
    <ButtonTitle button={button} />
  </ButtonContainer>
);

WindowButton.defaultProps = {
  buttonTo: undefined,
  buttonFunc: undefined
};

WindowButton.propTypes = {
  button: PropTypes.string.isRequired,
  buttonTo: PropTypes.string,
  buttonFunc: PropTypes.func
};

export default WindowButton;
