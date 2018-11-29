import React from "react";
import PropTypes from "prop-types";
import TitleContainer from "./components/title-container";

const ButtonTitle = ({ title }) => <TitleContainer>{title}</TitleContainer>;

ButtonTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default ButtonTitle;
