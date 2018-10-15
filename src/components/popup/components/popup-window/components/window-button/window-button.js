import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonTitle from "./components/button-title";

const WindowButton = ({ button, buttonLink }) => (
  <ButtonContainer to={buttonLink}>
    <ButtonTitle button={button} />
  </ButtonContainer>
);

WindowButton.defaultProps = {
  buttonLink: undefined
};

WindowButton.propTypes = {
  button: PropTypes.string.isRequired,
  buttonLink: PropTypes.string
};

export default WindowButton;
