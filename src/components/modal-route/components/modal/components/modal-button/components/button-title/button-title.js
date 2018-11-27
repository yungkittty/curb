import React from "react";
import PropTypes from "prop-types";
import TitleContainer from "./components/title-container";

const ButtonTitle = ({ button, buttonClicked }) => (
  <TitleContainer loading={buttonClicked}>{button}</TitleContainer>
);

ButtonTitle.propTypes = {
  button: PropTypes.string.isRequired
};

export default ButtonTitle;
