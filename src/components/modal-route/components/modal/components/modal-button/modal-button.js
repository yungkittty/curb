import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonTitle from "./components/button-title";

const ModalButton = ({ button, buttonClick }) => (
  <ButtonContainer onClick={buttonClick}>
    <ButtonTitle button={button} />
  </ButtonContainer>
);

ModalButton.defaultProps = {
  buttonClick: undefined
};

ModalButton.propTypes = {
  button: PropTypes.string.isRequired,
  buttonClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default ModalButton;
