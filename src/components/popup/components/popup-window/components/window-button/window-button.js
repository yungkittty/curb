import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonTitle from "./components/button-title";

const WindowButton = ({ button, buttonTo, buttonFunc, buttonClicked }) => (
  <ButtonContainer to={buttonTo} onClick={buttonFunc} loading={buttonClicked}>
    <ButtonTitle button={button} />
  </ButtonContainer>
);

WindowButton.defaultProps = {
  buttonTo: undefined,
  buttonFunc: undefined
};

WindowButton.propTypes = {
  button: PropTypes.string.isRequired,
  buttonTo: PropTypes.object,
  buttonFunc: PropTypes.func
};

export default WindowButton;
