import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonTitle from "./components/button-title";

const ModalButton = ({ button, buttonTo, buttonFunc, buttonClicked }) => (
  <ButtonContainer to={buttonTo} onClick={buttonFunc} loading={buttonClicked}>
    <ButtonTitle button={button} buttonClicked={buttonClicked} />
  </ButtonContainer>
);

ModalButton.defaultProps = {
  buttonTo: undefined,
  buttonFunc: undefined
};

ModalButton.propTypes = {
  button: PropTypes.string.isRequired,
  buttonTo: PropTypes.object,
  buttonFunc: PropTypes.func
};

export default ModalButton;
