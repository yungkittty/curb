import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonTitle from "./components/button-title";

const ModalButton = ({ title, onClick }) => (
  <ButtonContainer onClick={onClick}>
    <ButtonTitle title={title} />
  </ButtonContainer>
);

ModalButton.defaultProps = {
  onClick: undefined
};

ModalButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default ModalButton;
