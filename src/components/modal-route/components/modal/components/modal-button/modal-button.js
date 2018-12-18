import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonTitle from "./components/button-title";

const ModalButton = ({ title, to, onClick }) => (
  <ButtonContainer to={to} onClick={onClick}>
    <ButtonTitle>{title}</ButtonTitle>
  </ButtonContainer>
);

ModalButton.defaultProps = {
  to: undefined,
  onClick: undefined
};

ModalButton.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func
};

export default ModalButton;
